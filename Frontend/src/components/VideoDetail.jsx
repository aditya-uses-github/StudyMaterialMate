import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { Videos } from "./";
import { fetchYoutubeVideosAPI } from "../utils/fetchFromAPI";
import SchoolTwoToneIcon from "@mui/icons-material/SchoolTwoTone";
import { Sidebar } from "./";

const VideoDetail = () => {
    const [videoDetail, setVideoDetail] = useState(null);
    const [videos, setVideos] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetchYoutubeVideosAPI(`videos?part=snippet,statistics&id=${id}`).then(
            (data) => setVideoDetail(data.items[0])
        );
    }, [id]);

    if (!videoDetail?.snippet) return <div>Loading.....</div>;

    const {
        snippet: { title },
    } = videoDetail;

    return (
        <Stack>
            <Stack
                direction="row"
                alignItems="center"
                p={2}
                sx={{
                    position: "sticky",
                    background: "black",
                    top: 0,
                    justifyContent: "space-between",
                }}
            >
                <Link to="/" style={{ display: "flex", alignItems: "center" }}>
                    <span
                        style={{
                            color: "white",
                            display: "flex",
                            flexDirection: "horizontal",
                        }}
                    >
                        <SchoolTwoToneIcon
                            style={{ paddingLeft: "20px", fontSize: "45px" }}
                        />
                        <Typography
                            sx={{
                                px: "10px",
                                py: "12px",
                                fontWeight: "bold !important",
                            }}
                        >
                            Home
                        </Typography>
                    </span>
                </Link>
            </Stack>
            <Box minHeight="95vh">
                <Stack direction={{ xs: "column", md: "row" }}>
                    {/* <Sidebar /> */}
                    <Box flex={1}>
                        <Box
                            sx={{
                                width: "100%",
                                position: "sticky",
                                top: "86px",
                            }}
                        >
                            <ReactPlayer
                                url={`https://www.youtube.com/watch?v=${id}`}
                                className="react-player"
                                controls="true"
                                playing="true"
                            />
                            <Typography
                                color="#fff"
                                variant="h5"
                                fontWeight="bold"
                                p={2}
                            >
                                {title}
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        px={2}
                        py={{ md: 1, xs: 5 }}
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Typography
                            px="35px"
                            variant="h6"
                            fontWeight="bold"
                            sx={{ px: "80px", color: "gray" }}
                        >
                            Keep Studying
                        </Typography>
                        <Videos videos={videos} direction="column" />
                    </Box>
                </Stack>
            </Box>
        </Stack>
    );
};

export default VideoDetail;
