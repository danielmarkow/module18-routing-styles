import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import Nav from "./components/Nav";

import {Routes, Route, Link, HashRouter} from "react-router-dom";

import {UserContext} from "./context/UserContext";

function App() {

    return (
        <HashRouter>
            <div>
                <h1>Routing - Hello World</h1>
                <Nav />
                <hr />
                <UserContext.Provider value={{users: ["peter"]}}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/products" element={<Products />} />
                    </Routes>
                </UserContext.Provider>

            </div>
        </HashRouter>
    );
}

export default App;