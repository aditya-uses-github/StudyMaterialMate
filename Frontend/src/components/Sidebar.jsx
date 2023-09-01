import React from "react";
import { Stack } from "@mui/material";

import { categories } from "../utils/constants";

const Categories = ({ selectedCategory, setSelectedCategory }) => (
    <Stack
        direction="row"
        sx={{
            overflowY: "auto",
            height: { sx: "auto", md: "95%" },
            flexDirection: { sx: "row", md: "column" },
            display: "flex",
            justifyContent: "center",
            width: "175px",
        }}
    >
        {categories.map((category) => (
            <button
                className="category-btn"
                onClick={() => setSelectedCategory(category.name)}
                style={{
                    background: category.name === selectedCategory && "#FC1503",
                    color: "white",
                    paddingTop: "15px",
                    paddingBottom: "15px",
                }}
                key={category.name}
            >
                <span
                    style={{
                        color:
                            category.name === selectedCategory
                                ? "white"
                                : "red",
                        marginRight: "15px",
                    }}
                >
                    {category.icon}
                </span>
                <span
                    style={{
                        opacity:
                            category.name === selectedCategory ? "1" : "0.6",
                    }}
                >
                    {category.display}
                </span>
            </button>
        ))}
    </Stack>
);

export default Categories;
