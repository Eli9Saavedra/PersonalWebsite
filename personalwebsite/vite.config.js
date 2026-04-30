import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [plugin()],
    server: {
        port: 63489,
        // Warm up the app entry so Vite crawls the whole import graph
        // and discovers all deps BEFORE the browser sends its first
        // request. Without this, Visual Studio launches the browser
        // so quickly that Vite still discovers new deps mid-request,
        // invalidates its prebundle, and returns 504 "Outdated
        // Optimize Dep" for react / react-dom / react-router-dom.
        warmup: {
            clientFiles: ['./src/main.jsx'],
        },
    },
    // Ensure a single React copy across the graph.
    resolve: {
        dedupe: ['react', 'react-dom', 'react-router', 'react-router-dom'],
    },
    optimizeDeps: {
        include: [
            'react',
            'react-dom',
            'react-dom/client',
            'react/jsx-dev-runtime',
            'react/jsx-runtime',
            'react-router',
            'react-router-dom',
            'react-icons',
        ],
    },
})