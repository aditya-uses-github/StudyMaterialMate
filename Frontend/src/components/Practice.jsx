import React, { useEffect, useState } from "react";
import { DisplaySearch, Loader, NullSearch } from "./";
import { fetchFromGoogleSearch } from "../utils/fetchFromAPI";
import { Typography } from "@mui/material";

const Practice = ({ searchTerm }) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        setData(null);
        fetchFromGoogleSearch("Practice Problems for" + searchTerm).then(
            (data) => setData(data)
        );
        console.log(data);
    }, [searchTerm]);

    if (searchTerm === null) return <NullSearch />;
    else
        return (
            <div>
                <div>
                    <div style={{ color: "white" }}>
                        <Typography
                            variant="h4"
                            fontWeight={900}
                            color="white"
                            mb={3}
                            ml={{ sm: "50px" }}
                        >
                            Practice{" "}
                            <span style={{ color: "#FC1503" }}>
                                {searchTerm}
                            </span>{" "}
                            here
                        </Typography>
                        {data ? <DisplaySearch data={data} /> : <Loader />}
                    </div>
                </div>
            </div>
        );
};

export default Practice;
