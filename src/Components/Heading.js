import React from "react";
import Search from "./Search";

function Heading() {
    return (<div><nav className="navbar navbar-dark bg-primary">
        <a className="navbar-brand" href="#!">React Quotes</a>
        <Search />
    </nav>

    </div>
    );
}
export default Heading;