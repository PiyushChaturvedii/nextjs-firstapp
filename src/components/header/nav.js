import Link from 'next/link'

function Nav() {
    return (
        <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <Link href="/about">
                <a class="mr-5 hover:text-gray-900">About</a>
            </Link>
            <Link href="/contact-us">
                <a class="mr-5 hover:text-gray-900">Contact Us</a>
            </Link>
            <Link href="/event">
                <a class="mr-5 hover:text-gray-900">Event</a>
            </Link>
            
        </nav>
    )
}

export default Nav