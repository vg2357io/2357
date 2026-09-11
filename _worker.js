export default {
    async fetch(request, env, ctx) {
        // 1. Intenta obtener el recurso estático (JS, CSS, imágenes o páginas estáticas)
        const response = await env.ASSETS.fetch(request);

        // 2. Si el recurso existe (estado distinto de 404), se lo entrega al usuario tal cual
        if (response.status !== 404) {
            return response;
        }

        // 3. Si devolvió 404, significa que es una ruta de tu SPA (ej. /dashboard)
        // Reescribimos hacia / para evitar la redirección de /index.html a /
        const url = new URL(request.url);
        url.pathname = '/';

        // Cloudflare sirve index.html desde /; conservamos su estado y sus cabeceras
        return env.ASSETS.fetch(new Request(url.toString(), request));
    }
};