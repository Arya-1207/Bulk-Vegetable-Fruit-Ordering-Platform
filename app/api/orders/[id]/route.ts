import { prisma } from "@/lib/prisma";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const id = Number(params.id);
    
    if (isNaN(id)) {
      return new Response(JSON.stringify({ error: "Invalid ID" }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    const order = await prisma.order.findUnique({
      where: { id },
    });
    
    if (!order) {
      return new Response(JSON.stringify({ error: "Order not found" }), { 
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    return new Response(JSON.stringify(order), { 
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error("Error fetching order:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch order" }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
