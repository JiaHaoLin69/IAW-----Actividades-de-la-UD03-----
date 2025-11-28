import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom";
import { IoIosWoman } from "react-icons/io";
import { IoIosMan } from "react-icons/io";
import { Navbar } from "./navbar";
import Home from "./home";
import About from "./about";
import '../../App.css';
export default function Rutas() {
return (
<Router>
<Navbar />
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/usuario/:nombre" element={<MySkills/>} />
<Route path="/about" element={<About/>} />
<Route path="*" element={<NoPage/>} />
</Routes>
</Router>
);
}

function MySkills() {

const params = useParams();
  if (params.nombre === 'Marisa') {
      return <h1 className="parametro"><IoIosWoman /> Bienvenida a la página de {params.nombre}</h1>;
  }

 if (params.nombre === 'Juan') {
      return <h1 className="parametro"><IoIosMan /> Bienvenido a la página de {params.nombre} </h1>;
  }
}

function NoPage() {
return <h2 className="nopage">La página que has solicitado no existe</h2>};