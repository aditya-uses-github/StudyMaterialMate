import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import SchoolTwoToneIcon from "@mui/icons-material/SchoolTwoTone";

import { SearchBar } from "./";

const Navbar = ({
    setSelectedCategory,
    setSearchTerm,
    searchbarTerm,
    setSearchbarTerm,
}) => (
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
        <Link
            to="/"
            style={{ display: "flex", alignItems: "center" }}
            onClick={() => {
                setSearchTerm(null);
                setSelectedCategory("home");
                setSearchbarTerm("");
            }}
        >
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
        <SearchBar
            setSearchbarTerm={setSearchbarTerm}
            searchbarTerm={searchbarTerm}
            setSearchTerm={setSearchTerm}
        />
    </Stack>
);

export default Navbar;
