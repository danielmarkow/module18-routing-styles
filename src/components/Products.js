import {useContext} from "react";
import {UserContext} from "../context/UserContext";

function Products() {
    const ctx = useContext(UserContext);
    ctx.users.push(Math.random().toString(36).substr(2, 5));
    return (
        <div>
            <h1>Products</h1>
            {JSON.stringify(ctx.users)}
        </div>
    );
}

export default Products;