import assert from 'node:assert/strict';
import test from 'node:test';
import worker from '../_worker.js';

const html = '<!doctype html><html><body><div id="app"></div></body></html>';

function createAssets(indexResponse = new Response(html, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' }
})) {
    const requests = [];
    const env = {
        ASSETS: {
            async fetch(request) {
                requests.push(request);
                const url = new URL(request.url);

                // Cloudflare redirige la URL no canónica /index.html a / sin cuerpo.
                if (url.pathname === '/index.html') {
                    return new Response(null, {
                        status: 307,
                        headers: { Location: '/' + url.search }
                    });
                }

                if (url.pathname === '/') {
                    return indexResponse;
                }

                return new Response(null, { status: 404 });
            }
        }
    };

    return { env, requests };
}

for (const path of ['/dashboard', '/dashboard/', '/universo/rade?origen=directo']) {
    test(`Entrega el HTML al entrar directamente en ${path}`, async () => {
        const { env, requests } = createAssets();
        const request = new Request('https://2357.test' + path);
        const response = await worker.fetch(request, env);

        assert.equal(response.status, 200);
        assert.equal(response.headers.get('Content-Type'), 'text/html; charset=utf-8');
        assert.equal(response.headers.has('Location'), false);
        assert.equal(await response.text(), html);
        assert.equal(requests.length, 2);
        assert.equal(requests[0], request);
        const fallbackUrl = new URL(requests[1].url);
        assert.equal(fallbackUrl.origin, 'https://2357.test');
        assert.equal(fallbackUrl.pathname, '/');
        assert.equal(fallbackUrl.search, new URL(request.url).search);
    });
}

for (const status of [200, 301, 304, 403, 405, 500]) {
    test(`Conserva la respuesta original de assets con estado ${status}`, async () => {
        const assetResponse = new Response(null, { status });
        let calls = 0;
        const env = {
            ASSETS: {
                async fetch() {
                    calls++;
                    return assetResponse;
                }
            }
        };

        const response = await worker.fetch(new Request('https://2357.test/favicon.svg'), env);

        assert.equal(response, assetResponse);
        assert.equal(calls, 1);
    });
}

test('Conserva el método HEAD y las cabeceras al pedir el HTML de entrada', async () => {
    const indexResponse = new Response(null, {
        headers: { 'Content-Type': 'text/html; charset=utf-8' }
    });
    const { env, requests } = createAssets(indexResponse);
    const request = new Request('https://2357.test/universo/rade', {
        method: 'HEAD',
        headers: { Accept: 'text/html' }
    });
    const response = await worker.fetch(request, env);

    assert.equal(response, indexResponse);
    assert.equal(await response.text(), '');
    assert.equal(requests[1].method, 'HEAD');
    assert.equal(requests[1].headers.get('Accept'), 'text/html');
});

for (const status of [304, 404, 503]) {
    test(`No convierte el estado ${status} del fallback en un 200`, async () => {
        const indexResponse = new Response(null, {
            status,
            headers: { ETag: '"index-v1"' }
        });
        const { env } = createAssets(indexResponse);
        const response = await worker.fetch(new Request('https://2357.test/dashboard'), env);

        assert.equal(response, indexResponse);
        assert.equal(response.status, status);
        assert.equal(response.headers.get('ETag'), '"index-v1"');
    });
}