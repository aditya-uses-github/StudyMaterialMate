import React, { useEffect, useState } from "react";
import { Stack, CircularProgress, Box } from "@mui/material";
import { Typography } from "@mui/material";
import { fetchFromChatGpt } from "../utils/fetchFromAPI";

const ChatGptFeed = ({ defaultValue }) => {
    const option = {
        model: "text-davinci-003",
        prompt: "",
        temperature: 0.5,
        max_tokens: 2048,
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
    };
    useEffect(() => {
        setInput(defaultValue);
    }, [defaultValue]);

    const [input, setInput] = useState(defaultValue);
    const [ans, setAns] = useState("");
    const [msg, setMsg] = useState(
        input
            ? `"${defaultValue}" is given as auto-input, search or change it!`
            : "Please enter a question and search!"
    );

    async function handleSubmit() {
        setAns(null);
        option.prompt = input;
        const response = await fetchFromChatGpt(option);
        setAns(response.data.choices[0].text);
        setMsg("Please enter a new question and search!");
    }

    return (
        <div>
            <div style={{ color: "rgb(114,113,113)" }}>{msg}</div>
            <Box
                style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    paddingTop: "50px",
                }}
            >
                <Typography
                    variant="h4"
                    fontWeight={900}
                    color="white"
                    mb={3}
                    display="flex"
                    justifyContent="center"
                >
                    Use Chat GPT
                </Typography>
                <textarea
                    className="textbox"
                    placeholder="Enter your question"
                    value={input}
                    cols={150}
                    rows={3}
                    onChange={(e) => setInput(e.target.value)}
                ></textarea>
                <Stack
                    direction="row"
                    alignItems="center"
                    p={2}
                    sx={{
                        background: "black",
                        top: 0,
                        justifyContent: "center",
                    }}
                >
                    <button
                        className="chatgpt-btn"
                        style={{ margin: "2px" }}
                        onClick={handleSubmit}
                    >
                        Search!
                    </button>
                    <button
                        className="chatgpt-btn"
                        style={{ margin: "2px" }}
                        onClick={() => {
                            setInput("");
                            option.prompt = "";
                            setAns("");
                        }}
                    >
                        Reset
                    </button>
                </Stack>
            </Box>
            <span
                style={{
                    marginTop: "30px",
                    display: "flex",
                    justifyContent: "center",
                    fontSize: "25px",
                    fontWeight: "bold",
                    color: "rgb(168, 157, 157)",
                }}
            >
                {ans === null || ans === "" ? "" : "Result from Chat GPT!"}
            </span>
            <span
                style={{
                    display: "flex",
                    justifyContent: "center",
                    color: "white",
                }}
            >
                {ans === null ? (
                    <CircularProgress sx={{ color: "white" }} />
                ) : (
                    <Box
                        style={{
                            marginLeft: "100px",
                            marginRight: "100px",
                        }}
                    >
                        <pre style={{ whiteSpace: "pre-wrap" }}>{ans}</pre>
                    </Box>
                )}{" "}
            </span>
        </div>
    );
};

export default ChatGptFeed;
