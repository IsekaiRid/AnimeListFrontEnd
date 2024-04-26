import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AddPage, TabelAnime, Editpage, Login } from "./pages";
import { DataProvider } from "../src/components/utility/DataGlobal";


const App = () => {

  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }
  
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login/>} />
          <Route path="/home" element={<TabelAnime />} />
          <Route path="home/add" element={<AddPage />} />
          <Route path="home/edit/:id" element={<Editpage />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  )
}

export default App
