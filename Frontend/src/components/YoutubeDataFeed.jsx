import React, { useEffect, useState } from "react";
import { Box, Typography, cardContentClasses } from "@mui/material";
import { Videos, Loader, NullSearch } from "./";

import { fetchYoutubeVideosAPI } from "../utils/fetchFromAPI";

const YoutubeDataFeed = ({ searchTerm }) => {
    const [videos, setVideos] = useState(null);

    const getData = async () => {
        const res = await fetchYoutubeVideosAPI(`search?part=snippet&q=${searchTerm}`);
        console.log("res variable recieved data");
        setVideos(res);
        console.log("data has been added to the videos variable")
    }

    console.log("youtube page");

    useEffect(() => {
        setVideos(null);
        if (searchTerm != null){
            console.log("searching for data");  
            getData();
            // white screen of death
            return(
                <Videos videos={videos} />
            )
        }

    }, [searchTerm]);

    if (searchTerm === null) return <NullSearch />;
    else
        return (
            <div>
                <Box>
                    <Typography
                        variant="h4"
                        fontWeight={900}
                        color="white"
                        mb={3}
                        ml={{ sm: "50px" }}
                    >
                        Youtube search results for{" "}
                        <span style={{ color: "#FC1503" }}>{searchTerm}</span>{" "}
                        videos
                    </Typography>
                    <Box display="flex" justifyContent="center">
                        <Box sx={{ mr: { sm: "20px" } }} />
                        {/* {videos ?  <Videos videos={videos} /> : <Loader />} */}
                    </Box>
                </Box>
            </div>
        );
};

export default YoutubeDataFeed;
