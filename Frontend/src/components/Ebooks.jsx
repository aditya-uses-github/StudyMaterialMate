import React, { useEffect, useState } from "react";
import { DisplaySearch, Loader, NullSearch } from "./";
import { fetchFromGoogleSearch } from "../utils/fetchFromAPI";
import { Typography } from "@mui/material";

const Ebooks = ({ searchTerm }) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        setData(null);
        fetchFromGoogleSearch("Ebooks for " + searchTerm).then((data) =>
            setData(data)
        );
    }, [searchTerm]);

    if (searchTerm === null) return <NullSearch />;
    else
        return (
            <div>
                <div style={{ color: "white" }}>
                    <Typography
                        variant="h4"
                        fontWeight={900}
                        color="white"
                        mb={3}
                        ml={{ sm: "50px" }}
                    >
                        Ebooks for{" "}
                        <span style={{ color: "#FC1503" }}>{searchTerm}</span>
                    </Typography>
                    {data ? <DisplaySearch data={data} /> : <Loader />}
                </div>
            </div>
        );
};

export default Ebooks;
