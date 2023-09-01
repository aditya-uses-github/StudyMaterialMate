import GoogleIcon from "@mui/icons-material/Google";
import YouTubeIcon from "@mui/icons-material/YouTube";
import AutoStoriesRoundedIcon from "@mui/icons-material/AutoStoriesRounded";
import LightbulbRoundedIcon from "@mui/icons-material/LightbulbRounded";
import PsychologySharpIcon from '@mui/icons-material/PsychologySharp';

export const categories = [
  { name: "googlesearch", display: "Google Search", icon: <GoogleIcon /> },
  { name: "youtube", display: "Youtube Videos", icon: <YouTubeIcon /> },
  { name: "chatgpt", display: "Chat GPT", icon: <PsychologySharpIcon fontSize="medium"/> },
  { name: "ebooks", display: `E-Books`, icon: <AutoStoriesRoundedIcon /> },
  { name: "practice", display: "Practice", icon: <LightbulbRoundedIcon /> },
];
