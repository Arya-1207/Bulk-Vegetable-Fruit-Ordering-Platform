import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  const products = await prisma.product.findMany();
  return new Response(JSON.stringify(products), { status: 200 });
}
