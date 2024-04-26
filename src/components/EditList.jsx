import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditList = () => {
    const { id } = useParams();
    const [name, setName] = useState("");
    const [des, setDescription] = useState("");
    const [file, setFile] = useState(null);
    const [url,Dataurl] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/anime/${id}`);
                const data = await response.json();
                setName(data.name);
                setDescription(data.des);
                Dataurl(data.url);
            } catch (error) {
                console.error("Terjadi kesalahan saat mengambil data:", error);
            }
        };

        fetchData();
    }, [id]);

    const EditList = async (e) => {
        e.preventDefault();
        const setData = new FormData();
        setData.append("name", name);
        setData.append("des", des);
        setData.append("file", file);

        try {
            const response = await fetch(`http://localhost:5000/anime/${id}`, {
                method: "PATCH",
                body: setData,
            });

            navigate("/home");
            if (response.ok) {
            } else {
                console.error("Terjadi kesalahan saat Edit data.");
            }
        } catch (error) {
            console.error("Terjadi kesalahan:", error);
        }
    };

    return (
        <div className="flex justify-center pt-32 items-center">
            <div
                className="relative h-auto mx-4 -mt-6 w-64 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                <img
                    src={url}
                    alt="card-image" />
            </div>
            <form className="max-w-sm " onSubmit={EditList}>

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
    )
}

export default EditList
