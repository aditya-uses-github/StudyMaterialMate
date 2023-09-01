import React, { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

import {
    Navbar,
    Sidebar,
    GoogleDataFeed,
    YoutubeDataFeed,
    Home,
    Ebooks,
    ChatGptFeed,
    Practice,
} from "./";

const Feed = () => {
    const { search } = useParams();

    const [selectedCategory, setSelectedCategory] = useState("home");

    const [searchTerm, setSearchTerm] = useState(search || null);
    const [searchbarTerm, setSearchbarTerm] = useState("");

    return (
        <div>
            <Navbar
                setSelectedCategory={setSelectedCategory}
                setSearchTerm={setSearchTerm}
                searchbarTerm={searchbarTerm}
                setSearchbarTerm={setSearchbarTerm}
            />
            <Stack
                sx={{
                    flexDirection: {
                        sx: "column",
                        md: "row",
                    },
                    height: "89.5vh",
                }}
            >
                <Stack
                    sx={{
                        position: "sticky",
                        borderRight: "1px solid #3d3d3d",
                        px: { sx: 0, md: 2 },
                    }}
                >
                    <Sidebar
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                    />

                    <Typography
                        className="copyright"
                        variant="body2"
                        sx={{ mt: 1.5, color: "#fff", alignContent: "center" }}
                    >
                        <a
                            href="https://www.linkedin.com/in/aditya-bijapurkar/"
                            style={{
                                color: "#fff",
                                fontSize: "11px",
                                display: "flex",
                                justifyContent: "center",
                            }}
                            target="_blank"
                        >
                            Copyright @Aditya Bijapurkar
                        </a>
                    </Typography>
                </Stack>
                <Box p={2} sx={{ overflowY: "auto", flex: 2 }}>
                    {(() => {
                        if (selectedCategory === "home")
                            return <Home searchTerm={searchTerm} />;
                        else if (selectedCategory === "googlesearch")
                            return <GoogleDataFeed searchTerm={searchTerm} />;
                        else if (selectedCategory === "youtube")
                            return <YoutubeDataFeed searchTerm={searchTerm} />;
                        else if (selectedCategory === "chatgpt")
                            return <ChatGptFeed defaultValue={searchTerm} />;
                        else if (selectedCategory === "ebooks")
                            return <Ebooks searchTerm={searchTerm} />;
                        else if (selectedCategory === "practice")
                            return <Practice searchTerm={searchTerm} />;
                    })()}
                </Box>
            </Stack>
        </div>
    );
};

export default Feed;
