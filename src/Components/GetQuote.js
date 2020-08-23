import React, { useState, useEffect } from "react";
import GetButton from "./GetButton"
function GetQuote() {
    const [quote, setQuote] = useState({});
    const [clickCount, setClickCount] = useState(0)

    const increaseCount = () => {
        setClickCount(clickCount + 1);
    };

    useEffect(() => {
        fetch("https://osman-quote-server.glitch.me/quotes/random")
            .then(res => res.json())
            .then(res => {
                setQuote(res);
            });
    }, [clickCount]);

    return (
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 className="display-3"> {quote.quote}</h1>
                <br />
                <p className="lead"> "{quote.author}"</p>
            </div>
            <GetButton handleClick={increaseCount} />
        </div>

    );
}

export default GetQuote;