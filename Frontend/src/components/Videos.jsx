import React from "react";
import { Stack, Box } from "@mui/material";

import { VideoCard } from "./";

const Videos = ({ videos, direction}) => {
  console.log("videos component");

  if(videos){
    return(
      <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
        {videos.map((item, idx) => (item.snippet.tag==1) ? (
          <Box key={idx}>{item.id.videoId && <VideoCard video={item}/>}</Box>
        ): (null))}
      </Stack>
    )
  }
}

export default Videos;
