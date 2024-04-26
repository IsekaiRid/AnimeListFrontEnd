import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchData } from './utility/Global';
import { useData } from './utility/DataGlobal';

const Navbar = () => {
  const [query, setQuery] = useState('');
  const { data, setData } = useData(); 
  useEffect(() => {
    fetchData(`http://localhost:5000/anime/search?query=${query}`, setData);
  }, [query, setData]);

  return (
    <nav className="bg-gray-50 dark:bg-gray-700 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-screen-xl px-4 py-3 mx-auto">
        <div className="flex items-center">
          <ul className="flex items-center justify-between font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
            <li>
              <Link to="add" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                Tambahkan
              </Link>
            </li>
            <li>
              <input type="search" value={query} onChange={(e) => setQuery(e.target.value)} id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;