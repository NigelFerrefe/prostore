import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*", // Todos los rastreadores
        allow: "/", // Permitimos el rastreo global salvo excepciones

        // Bloqueamos rutas que no aportan valor SEO o son privadas
        disallow: [
          // 🔒 Rutas de autenticación (no deben indexarse nunca)
          "/sign-in",
          "/sign-up",

          // 🔒 Rutas privadas del usuario
          "/user/profile",   // Contiene datos personales
          "/user/orders",    // Historial privado del usuario

          // 💳 Rutas del flujo de compra (dinámicas o sensibles)
          "/cart",               // Carrito: contenido dinámico y volátil
          "/order",              // Página de orden (usa IDs únicos)
          "/payment-method",     // Paso del checkout, no indexable
          "/place-order",        // Acción de creación de pedido
          "/shipping-address",   // Dirección privada del usuario

          // ⚙️ Rutas internas o administrativas
          "/admin",              // Panel interno de gestión
          "/api",                // Endpoints de API (sin HTML ni SEO)
        ],
      },
    ],

    // 🗺️ Mapa del sitio (Next genera el /sitemap.xml si lo defines)
    sitemap: "https://prostore-nferrefe.vercel.app/sitemap.xml",
  };
}
