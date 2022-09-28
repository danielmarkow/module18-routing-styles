import {useContext} from "react";
import {UserContext} from "../context/UserContext";

function Home() {
    const ctx = useContext(UserContext);

    return (
        <div>
            <h1>Home</h1>
            {JSON.stringify(ctx.users)}
        </div>
    );
}

export default Home;