import Link from 'next/link'

export default function About() {
	return (
		<div className='min-h-screen p-8'>
			<h1 className='text-4xl font-bold mb-4'>About Page</h1>
			<nav className='mb-8'>
				<Link href='/' className='text-blue-600 hover:text-blue-800 mr-4'>
					Home
				</Link>
			</nav>
			<p>Learn more about us here!</p>
		</div>
	)
}
