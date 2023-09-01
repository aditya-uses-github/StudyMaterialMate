import React from "react";
import { Typography } from "@mui/material";

const Home = ({ searchTerm }) => {
    const msg =
        "This website uses machine learning to provide you with content which will help you in studies by filtering out all the distracting results!";

    return (
        <div
            style={{
                color: "white",
                display: "flex",
                justifyContent: "center",
            }}
        >
            {(() => {
                if (searchTerm === null) {
                    return (
                        <div>
                            <p
                                style={{
                                    marginTop: "100px",
                                    display: "flex",
                                    alignContent: "center",
                                }}
                            >
                                {msg}
                            </p>
                            <Typography
                                color="rgb(114, 113, 113)"
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <ol
                                    style={{
                                        marginTop: "150px",
                                        fontSize: "20px",
                                    }}
                                >
                                    <li>
                                        Search for a topic in the searchbar at
                                        the top.
                                    </li>
                                    <li>Select a category from the sidebar.</li>
                                    <li>
                                        Start learning with full efficiency.
                                    </li>
                                </ol>
                            </Typography>
                        </div>
                    );
                } else {
                    return (
                        <div>
                            <Typography
                                variant="h4"
                                fontWeight={900}
                                color="white"
                                mt={7}
                            >
                                You are searching for{" "}
                                <span style={{ color: "#FC1503" }}>
                                    {searchTerm}
                                </span>
                            </Typography>
                            <ol
                                style={{
                                    marginTop: "110px",
                                    color: "rgb(114,113,113)",
                                    fontSize: "20px",
                                }}
                            >
                                <li>Select a category from the sidebar.</li>
                                <li>Start learning with full efficiency.</li>
                            </ol>
                        </div>
                    );
                }
            })()}
        </div>
    );
};

export default Home;
