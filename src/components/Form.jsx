export default function Form({ action, bookDetails }) {
    // setting a defaultvalue allows us to optionaly 'prefill' our forms
    return (
        <form
            action={action}
            className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md space-y-4"
        >
            <div>
                <input type="hidden" defaultValue={bookDetails.id} name='id'></input>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                    Title
                </label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    required
                    defaultValue={bookDetails.title || ''}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
            </div>

            <div>
                <label htmlFor="author" className="block text-sm font-medium text-gray-700">
                    Author
                </label>
                <input
                    type="text"
                    name="author"
                    id="author"
                    required
                    defaultValue={bookDetails.author || ''}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
            </div>

            <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                    Description
                </label>
                <textarea
                    name="description"
                    id="description"
                    required
                    defaultValue={bookDetails.description || ''}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
            </div>

            <div>
                <label htmlFor="quote" className="block text-sm font-medium text-gray-700">
                    Quote
                </label>
                <input
                    type="text"
                    name="quote"
                    id="quote"
                    defaultValue={bookDetails.quote || ''}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
            </div>

            <div>
                <label htmlFor="released" className="block text-sm font-medium text-gray-700">
                    Release Date
                </label>
                <input
                    type="date"
                    name="released"
                    id="released"
                    defaultValue={bookDetails?.released ? new Date(bookDetails.released).toISOString().split('T')[0] : ''}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
            </div>

            <div>
                <label htmlFor="img_url" className="block text-sm font-medium text-gray-700">
                    Image URL
                </label>
                <input
                    type="url"
                    name="img_url"
                    id="img_url"
                    defaultValue={bookDetails.img_url || ''}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
            </div>

            <div>
                <label htmlFor="hero_image" className="block text-sm font-medium text-gray-700">
                    Hero Image URL
                </label>
                <input
                    type="url"
                    name="hero_image"
                    id="hero_image"
                    defaultValue={bookDetails.hero_image || ''}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
            </div>

            <div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                >
                    Submit
                </button>
            </div>
        </form>
    );
}

