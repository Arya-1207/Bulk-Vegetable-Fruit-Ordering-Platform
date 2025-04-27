// prisma/seed.ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Seed Products
  await prisma.product.createMany({
    data: [
      { 
        name: 'Tomatoes', 
        price: 2.5,
        description: 'Fresh, ripe tomatoes perfect for salads and cooking',
        image: '/api/placeholder/400/320'
      },
      { 
        name: 'Potatoes', 
        price: 1.8,
        description: 'Versatile potatoes for all your cooking needs',
        image: '/api/placeholder/400/320'
      },
      { 
        name: 'Carrots', 
        price: 2.0,
        description: 'Crisp, sweet carrots packed with nutrients',
        image: '/api/placeholder/400/320'
      },
      { 
        name: 'Cucumbers', 
        price: 2.2,
        description: 'Cool, refreshing cucumbers for salads',
        image: '/api/placeholder/400/320'
      },
      { 
        name: 'Spinach', 
        price: 3.0,
        description: 'Nutritious leafy greens rich in iron',
        image: '/api/placeholder/400/320'
      },
      { 
        name: 'Broccoli', 
        price: 3.5,
        description: 'Healthy broccoli florets rich in vitamins',
        image: '/api/placeholder/400/320'
      },
      { 
        name: 'Cauliflower', 
        price: 3.0,
        description: 'Versatile cauliflower for multiple dishes',
        image: '/api/placeholder/400/320'
      },
      { 
        name: 'Mangoes', 
        price: 5.5,
        description: 'Sweet, juicy mangoes at peak ripeness',
        image: '/api/placeholder/400/320'
      },
      { 
        name: 'Apples', 
        price: 4.0,
        description: 'Crisp, delicious apples for snacking',
        image: '/api/placeholder/400/320'
      },
      { 
        name: 'Bananas', 
        price: 1.5,
        description: 'Perfectly ripened bananas',
        image: '/api/placeholder/400/320'
      },
      { 
        name: 'Oranges', 
        price: 3.2,
        description: 'Juicy oranges full of vitamin C',
        image: '/api/placeholder/400/320'
      },
      { 
        name: 'Strawberries', 
        price: 6.0,
        description: 'Sweet, ripe strawberries',
        image: '/api/placeholder/400/320'
      },
      { 
        name: 'Blueberries', 
        price: 7.5,
        description: 'Antioxidant-rich blueberries',
        image: '/api/placeholder/400/320'
      },
      { 
        name: 'Grapes', 
        price: 4.5,
        description: 'Sweet seedless grapes',
        image: '/api/placeholder/400/320'
      },
      { 
        name: 'Pineapples', 
        price: 5.0,
        description: 'Tropical sweet pineapples',
        image: '/api/placeholder/400/320'
      },
      { 
        name: 'Onions', 
        price: 2.0,
        description: 'Essential onions for cooking',
        image: '/api/placeholder/400/320'
      },
      { 
        name: 'Garlic', 
        price: 3.5,
        description: 'Aromatic garlic bulbs',
        image: '/api/placeholder/400/320'
      },
      { 
        name: 'Ginger', 
        price: 4.2,
        description: 'Fresh ginger root for cooking and tea',
        image: '/api/placeholder/400/320'
      },
      { 
        name: 'Peas', 
        price: 2.8,
        description: 'Sweet green peas',
        image: '/api/placeholder/400/320'
      },
      { 
        name: 'Sweet Corn', 
        price: 3.1,
        description: 'Fresh sweet corn on the cob',
        image: '/api/placeholder/400/320'
      },
    ],
    skipDuplicates: true, // Skip if products with same name already exist
  })

  console.log('🌱 Seeded products!')

  // Optional: Seed a few orders (sample orders)
  await prisma.order.createMany({
    data: [
      {
        productId: 1, // Tomatoes
        quantity: 5,
        deliveryName: 'Arya Sharma',
        deliveryPhone: '9876543210',
        deliveryAddr: '123 Street, Pune',
        status: 'Pending',
      },
      {
        productId: 8, // Mangoes
        quantity: 2,
        deliveryName: 'Riya Kapoor',
        deliveryPhone: '8765432109',
        deliveryAddr: '456 Avenue, Mumbai',
        status: 'In Progress',
      },
      {
        productId: 15, // Pineapples
        quantity: 1,
        deliveryName: 'Rahul Singh',
        deliveryPhone: '7654321098',
        deliveryAddr: '789 Lane, Delhi',
        status: 'Delivered',
      },
    ],
    skipDuplicates: true, // Skip if same orders already exist
  })

  console.log('📦 Seeded orders!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
