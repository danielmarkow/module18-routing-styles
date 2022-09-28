import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";

import {Routes, Route, Link, HashRouter} from "react-router-dom";

function App() {
    return (
    <HashRouter>
        <div>
            <h1>Routing - Hello World</h1>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/products">Products</Link>
            <hr />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
            </Routes>

        </div>
    </HashRouter>
    );
}

export default App;