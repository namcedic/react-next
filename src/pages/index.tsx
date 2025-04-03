import Link from 'next/link'

export default function Home() {
	return (
		<div className='container mx-auto px-4 py-8'>
			<h1 className='text-4xl font-bold mb-4 text-center'>Home Page</h1>

			<div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 min-h-[200px]'>
				{/* About Link */}
				<nav className='flex justify-center items-center border rounded-lg shadow-md hover:shadow-lg transition-shadow'>
					<Link href='/about' className='text-blue-600 hover:text-blue-800 text-xl font-semibold p-4'>
						About
					</Link>
				</nav>

				{/* Shop Link */}
				<nav className='flex justify-center items-center border rounded-lg shadow-md hover:shadow-lg transition-shadow'>
					<Link href='/shop' className='text-blue-600 hover:text-blue-800 text-xl font-semibold p-4'>
						Shop
					</Link>
				</nav>
			</div>

			<div className='mt-8'>
				<p className='text-center text-gray-600 text-lg'>Welcome to the homepage!</p>
			</div>
		</div>
	)
}
