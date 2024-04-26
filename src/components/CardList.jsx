import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchData, deleteList, formatDate } from './utility/Global';
import { useData } from './utility/DataGlobal';

const CardList = () => {
    const { data, setData } = useData();
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData('http://localhost:5000/anime', setData, setError);
    }, []);

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <>
            <div className='grid md:grid-cols-4 :grid-row-1 mb-3 mt-24 mx-2'>
                {data.map((d) => (
                    <div className="relative mx-2 my-3 flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-auto transition hover:scale-95" key={d.id}>
                        <div
                            className="relative h-auto mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                            <img
                                src={d.url}
                                alt="card-image" />
                        </div>
                        <div className="p-6">
                            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                {d.name}
                            </h5>
                            <h1 className="block mb-2 font-sans text-sm antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                Tanggal Update: {formatDate(d.updatedAt)}
                            </h1>
                            <div className=' overflow-clip h-20  '>
                                <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                    {d.des}</p>
                            </div>
                        </div>
                        <div className="p-6 pt-0">
                            <Link to={`edit/${d.id}`}
                                className="mx-1 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                                type="button">
                                Edit
                            </Link>

                            <button onClick={() => deleteList(d.id)}
                                className="mx-1 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                                type="button">
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default CardList;
