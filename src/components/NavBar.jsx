import Link from "next/link";

export default function NavBar() {
    return (
        <nav className="flex flex-row w-50 justify-around">
            <Link href={`/`}>home</Link>
            <Link href={`/books`}>books</Link>
            <Link href={`/books/add-new`}>add book</Link>
            {/* <Link href={`/`}>home</Link>
            <Link href={`/`}>home</Link> */}

        </nav>
    )
}