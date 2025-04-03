import Link from 'next/link'

export default function NotFound() {
	return (
		<div className='min-h-screen p-8 flex flex-col items-center justify-center'>
			<h1 className='text-6xl font-bold mb-4'>404</h1>
			<p className='text-xl mb-8'>Page Not Found</p>
			<Link href='/' className='text-blue-600 hover:text-blue-800'>
				Return Home
			</Link>
		</div>
	)
}
