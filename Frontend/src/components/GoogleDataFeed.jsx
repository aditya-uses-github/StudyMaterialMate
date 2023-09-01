import React, { useEffect, useState } from "react";
import { DisplaySearch, Loader, NullSearch } from "./";
import { fetchFromGoogleSearch } from "../utils/fetchFromAPI";
import { Typography } from "@mui/material";

const GoogleDataFeed = ({ searchTerm }) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        setData(null);
        if (searchTerm != null) {
            fetchFromGoogleSearch(searchTerm).then((data) => setData(data));
        }
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
                        Search for{" "}
                        <span style={{ color: "#FC1503" }}>{searchTerm}</span>{" "}
                        from Google
                    </Typography>
                    {data ? <DisplaySearch data={data} /> : <Loader />}
                </div>
            </div>
        );
};

export default GoogleDataFeed;
