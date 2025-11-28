import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom";
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
return <h2 className="parametro">Parámetro introducido: {params.nombre}</h2>;
}

function NoPage() {
return <h2 className="nopage">La página que has solicitado no existe</h2>};