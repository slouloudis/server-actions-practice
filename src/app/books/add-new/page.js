import Form from "@/components/Form";
import { addBooks } from "@/utils/db_utils";

export default function Page() {

    return (
        <div>
            <h2>Add a new book</h2>
            <Form action={addBooks}/>
        </div>
    )
}