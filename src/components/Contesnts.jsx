import React from "react";

const Contents = (props) => {
    return (
        <>
        <div>
            <h2 id={props.id}>{props.title}</h2>
            <p>{props.description}</p>
        </div>
        </>
    );
};
export default Contents;