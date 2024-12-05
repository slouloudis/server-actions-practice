'use client'
import { useState } from "react";

export function ModalToggleButton({ children }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div>
            <button
                onClick={() => setIsModalOpen(!isModalOpen)}
                className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            >
                {isModalOpen ? 'Close Edit' : 'Open Edit'}
            </button>

            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-md shadow-md">
                        {children}
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="mt-4 w-full bg-red-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}