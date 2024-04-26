import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddList = () => {
    const [name, setName] = useState("");
    const [des, setDescription] = useState("");
    const [file, setFile] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("des", des);
        formData.append("file", file);

        try {
            const response = await fetch("http://localhost:5000/anime", {
                method: "POST",
                body: formData,
            });

            navigate("/home");
            if (response.ok) {

            } else {
                console.error("Terjadi kesalahan saat menambahkan data.");
            }
        } catch (error) {
            console.error("Terjadi kesalahan:", error);
        }
    };

    return (
        <div>
            <form className="max-w-sm mx-auto my-32" onSubmit={handleSubmit}>
                
                <div className="mb-5">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Nama
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Nama Anime..."
                        required
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="file" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Img
                    </label>
                    <input
                        type="file"
                        id="file"
                        onChange={(e) => setFile(e.target.files[0])}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Deskripsi
                    </label>
                    <input
                        type="text"
                        id="description"
                        value={des}
                        onChange={(e) => setDescription(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Plot"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Save
                </button>
            </form>
        </div>
    );
};

export default AddList;

