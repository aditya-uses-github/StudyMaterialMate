import React from "react";
import parse from "html-react-parser";
import DisplayCard from "./DisplayCard";

const DisplaySearch = ({ data }) => {
    return (
        <div>
            {data.map((d) => {
                return <DisplayCard data={d} />;
            })}
        </div>
    );
};

export default DisplaySearch;
