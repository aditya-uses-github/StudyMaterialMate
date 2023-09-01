import React from "react";
import parse from "html-react-parser";
import { Link, Stack } from "@mui/material";

const DisplayCard = ({ data }) => {
    let src_path;
    try{
        src_path=data.pagemap.cse_image[0].src;
    }
    catch(e){
        console.log(e);
    }

    return (
        <div
            className="display-card"
            style={{
                borderRadius: "10px",
                marginTop: "5px",
                marginBottom: "5px",
            }}
        >
            <div style={{ marginLeft: "10px" }}>
                <Stack direction="row">
                    <img
                        src={src_path}
                        alt="image error"
                        style={{
                            height: "50px",
                            width: "50px",
                            borderRadius: "50%",

                            marginRight: "10px",
                            marginTop: "5px",
                        }}
                    />
                    <pre style={{ marginTop: "25px", fontSize: "15px" }}>
                        {parse(data.htmlTitle)}
                    </pre>
                </Stack>
                <Link
                    href={data.link}
                    style={{ color: "rgb(85, 178, 249)", marginLeft: "60px" }}
                    target="_blank"
                >
                    {data.displayLink}
                </Link>
            </div>
            <p style={{ marginLeft: "10px", paddingBottom: "10px" }}>
                {parse(data.htmlSnippet)}
            </p>
        </div>
    );
};

export default DisplayCard;
