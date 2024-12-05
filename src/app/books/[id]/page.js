import {singleBookData,} from "@/utils/db_utils"


export default async function Page() {

    // get a single books details
    return (
        <div className="container mx-auto p-6">
        <div
            className="w-full h-64 bg-cover bg-center rounded-lg shadow-lg"
            style={{
                backgroundImage: `url(${bookDetails.hero_image || bookDetails.img_url})`,
            }}
        ></div>

        <div className="flex flex-col md:flex-row mt-6 space-y-6 md:space-y-0 md:space-x-6">
            <div className="flex-1">
                <h1 className="text-3xl font-bold mb-2">{bookDetails.title}</h1>
                <p className="text-sm text-gray-500 mb-4">
                    Released: {new Date(bookDetails.released).toLocaleDateString()}
                </p>
                <blockquote className="italic text-gray-700 border-l-4 border-blue-500 pl-4">
                    "{bookDetails.quote}"
                </blockquote>
            </div>
            <div className="flex-shrink-0 w-48 md:w-60">
                <img
                    src={bookDetails.img_url}
                    alt={bookDetails.title}
                    className="rounded-lg shadow-md"
                />
            </div>
            <div className="flex-1">
                <h2 className="text-xl font-semibold mb-2">Description</h2>
                <p className="text-gray-700">{bookDetails.description}</p>
            </div>
        </div>
        <div className="mt-8">
            <h2 className="text-xl font-semibold mb-2">Genres</h2>
            <p className="text-gray-700 italic">Coming soon...</p>
        </div>
        <div>
            <p>delete and edit buttons here</p>
        </div>
    </div>
    )
}