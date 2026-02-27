import ProductDetailsClient from './product-details-client';

export default function ProductDetailsPage({ params }) {
  return <ProductDetailsClient params={params} />;
}

// Required for static export - generate params for known product IDs
export async function generateStaticParams() {
  // Generate params for default products and specific dynamic IDs
  const params = [];
  
  // Default products (1-8)
  for (let i = 1; i <= 8; i++) {
    params.push({ id: i.toString() });
  }
  
  // Add specific dynamic product IDs that might exist
  const dynamicIds = [
    '1772129928888', // Previous problematic ID
    '1772130410315', // Current problematic ID from the screenshot
  ];
  
  dynamicIds.forEach(id => params.push({ id }));
  
  // Add a few common timestamp ranges for future dynamic products
  for (let i = 1700; i <= 2000; i++) {
    params.push({ id: `${i}000000000` });
  }
  
  return params;
}
