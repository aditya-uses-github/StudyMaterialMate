import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { useState } from "react";
import VideoDetail from "./VideoDetail";

const VideoCard = ({
    video: {
        id: { videoId },
        snippet,
    },
}) => {
    return (
        <Card
            sx={{
                width: { xs: "100%", sm: "358px", md: "300px" },
                boxShadow: "none",
                height: "auto",
                borderRadius: 0,
            }}
            onClick={() => {
                setPlay(true);
            }}
        >
            <Link to={`/video/${videoId}`}>
                <CardMedia
                    image={snippet?.thumbnails?.high?.url}
                    alt={snippet?.title}
                    sx={{ width: { xs: "100%", sm: "358px" }, height: 180 }}
                />
            </Link>
            <CardContent
                sx={{
                    backgroundColor: "#1e1e1e",
                    height: "50px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                }}
            >
                <Link to={`/video/${videoId}`}>
                    <Typography
                        variant="subtitle1"
                        fontWeight="bold"
                        color="#FFF"
                    >
                        {snippet?.title.slice(0, 60)}
                    </Typography>
                </Link>
                <Typography variant="subtitle2" color="gray">
                    {snippet?.channelTitle}
                    <CheckCircle
                        sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                    />
                </Typography>
            </CardContent>
        </Card>
    );
};

export default VideoCard;
