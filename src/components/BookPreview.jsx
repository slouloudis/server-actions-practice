import Link from "next/link";

export default function BookPreview({ book }) {
    return (
        <Link href={`/books/${book.id}`}>
        <div className="group relative w-48 h-72 cursor-pointer">
            <img
                src={book.img_url}
                alt={book.title}
                className="w-full h-full object-cover rounded-lg shadow-md"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <span className="text-white text-lg font-semibold text-center px-2">
                    {book.title}
                </span>
            </div>
        </div>
        </Link>
    );
}
