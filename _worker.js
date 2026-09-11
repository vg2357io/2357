export default {
    async fetch(request, env, ctx) {
        // 1. Intenta obtener el recurso estático (JS, CSS, imágenes o páginas estáticas)
        const response = await env.ASSETS.fetch(request);

        // 2. Si el recurso existe (estado distinto de 404), se lo entrega al usuario tal cual
        if (response.status !== 404) {
            return response;
        }

        // 3. Si devolvió 404, significa que es una ruta de tu SPA (ej. /dashboard)
        // Reescribimos la petición hacia /index.html
        const url = new URL(request.url);
        url.pathname = '/index.html';

        // Pedimos /index.html a los assets de Cloudflare
        const indexResponse = await env.ASSETS.fetch(new Request(url.toString(), request));

        // Devolvemos el contenido de index.html forzando una respuesta 200 OK
        return new Response(indexResponse.body, {
            status: 200,
            headers: indexResponse.headers
        });
    }
};