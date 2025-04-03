import ProductCard from '@/components/ProductCard'

// pages/shop.tsx
const products = [
	{
		id: 1,
		code: '1.0.1.017.000',
		name: 'One',
		percentage: '3-15%',
		image: 'https://picsum.photos/300/300?random=1'
	},
	{
		id: 2,
		code: '1.0.1.047.650',
		name: 'Two',
		percentage: '1-15%',
		image: 'https://picsum.photos/300/300?random=2'
	},
	{
		id: 3,
		code: '1.0.1.700.100',
		name: 'Three',
		percentage: '0.0%',
		image: 'https://picsum.photos/300/300?random=3'
	}
	// Add more products as needed
]

export default function ShopPage() {
	return (
		<div className='container mx-auto px-4 py-8'>
			<h1 className='text-3xl font-bold mb-8 text-center'>FLASH SALE</h1>

			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
				{products.map((product) => (
					<ProductCard
						key={product.id}
						code={product.code}
						name={product.name}
						percentage={product.percentage}
						imageUrl={product.image}
					/>
				))}
			</div>

			{/* Percentage List Section */}
			<div className='mt-12 p-6 bg-gray-100 rounded-lg'>
				<h2 className='text-xl font-bold mb-4'>Squeeze: &quot;Yoga&quot;</h2>
				<div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4'>
					{Array.from({ length: 29 }, (_, i) => (
						<div key={i} className='bg-white p-3 rounded shadow'>
							{i + 1}-20%
						</div>
					))}
				</div>
				<button className='mt-4 text-blue-600 hover:underline'>Xem tất cả</button>
			</div>
		</div>
	)
}
