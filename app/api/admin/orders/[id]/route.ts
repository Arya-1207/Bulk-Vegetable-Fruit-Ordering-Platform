import { prisma } from "@/lib/prisma";

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    const { status } = await req.json();
    const id = Number(params.id);
    
    if (isNaN(id)) {
      return new Response(JSON.stringify({ error: "Invalid ID" }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    const updatedOrder = await prisma.order.update({
      where: { id },
      data: { status },
    });
    
    return new Response(JSON.stringify(updatedOrder), { 
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error("Error updating order:", error);
    return new Response(JSON.stringify({ error: "Failed to update order" }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
