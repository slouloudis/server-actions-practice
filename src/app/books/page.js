import BookPreview from "@/components/BookPreview"
import { connect } from "@/utils/connect"
export default async function Page() {
    const db = connect()

    const books = (await db.query(`SELECT * FROM books`)).rows

    // console.log(books)

    return (
        <div className="">
            <h2>all books</h2>
            <div className="flex flex-row min-h-screen justify-center items-center gap-3 my-10 flex-wrap mx-40">
                {books.map(book => (
                    <BookPreview book={book} key={book.id} />
                ))}
            </div>
        </div>
    )
}