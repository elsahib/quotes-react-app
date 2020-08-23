import React from "react";

function GetButton({ handleClick }) {
    return <button onClick={handleClick} className="btn btn-primary">Get a Quote</button>;
}

export default GetButton;