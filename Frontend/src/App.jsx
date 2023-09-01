import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import { Feed, VideoDetail } from "./components";

const App = () => (
    <BrowserRouter>
        <Box sx={{ backgroundColor: "#000" }}>
            <Routes>
                <Route exact path="/" element={<Feed />} />
                <Route path="/:search" element={<Feed />} />
                <Route path="/video/:id" element={<VideoDetail />} />
            </Routes>
        </Box>
    </BrowserRouter>
);

export default App;
