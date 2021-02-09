import React from "react";

export default function HelloComponent({name, lastname, age}) {
    return (
        <div>
            <h1>Hello, I'm James {name} {lastname} {age}</h1>
        </div>
    )
}