import { MetadataRoute } from "next";
import { prisma } from "@/db/prisma"; // para obtener productos dinámicos

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://prostore-nferrefe.vercel.app/";

  // 🔹 Productos dinámicos desde la base de datos
  const products = await prisma.product.findMany({
    select: { slug: true },
  });

  // Rutas estáticas públicas
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0, // la home tiene máxima prioridad
    },
    {
      url: `${baseUrl}/product`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  // Rutas de productos individuales (dinámicas)
  const productRoutes: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${baseUrl}/product/${product.slug}`,
    lastModified: new Date(), // si quieres usar updatedAt, asegúrate de tener ese campo
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...productRoutes,
  ];
}
