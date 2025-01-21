import { jsx as _jsx } from "react/jsx-runtime";
import { Grow, IconButton, InputAdornment, TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
const Search = () => {
    const [showSearch, setShowSearch] = useState(false); // State to toggle search box visibility
    const [searchTerm, setSearchTerm] = useState(""); // State to manage search input
    const searchInputRef = useRef(null); // Ref to focus the search input
    const containerRef = useRef(null); // Ref for the entire search component
    // Handle changes in the search input
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };
    // Clear the search input
    const clearSearch = () => {
        setSearchTerm("");
    };
    // Toggle the visibility of the search box
    const toggleSearch = () => {
        setShowSearch((prev) => !prev);
        if (!showSearch && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    };
    // Close search box on pressing Escape key
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape" && showSearch) {
                setShowSearch(false);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [showSearch]);
    // Close search box on clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current &&
                !containerRef.current.contains(event.target)) {
                setShowSearch(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (_jsx("div", { ref: containerRef, children: showSearch ? (_jsx(Grow, { in: showSearch, timeout: 500, children: _jsx(TextField, { variant: "outlined", placeholder: "\u062C\u0633\u062A\u062C\u0648...", size: "small", value: searchTerm, onChange: handleSearchChange, inputRef: searchInputRef, InputProps: {
                    startAdornment: (_jsx(InputAdornment, { position: "start", children: _jsx(IconButton, { onClick: () => {
                                window.location.href = `http://localhost:3000/search/${searchTerm}`;
                            }, sx: { padding: 1 }, children: _jsx(SearchIcon, {}) }) })),
                    endAdornment: searchTerm ? (_jsx(InputAdornment, { position: "end", children: _jsx(IconButton, { onClick: clearSearch, "aria-label": "clear search", sx: { padding: 0 }, children: _jsx(CloseIcon, { sx: { margin: 1, color: "button.tGrayFg" } }) }) })) : null,
                }, sx: {
                    padding: 1,
                    width: 500,
                    borderRadius: 2,
                    "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                    },
                    "& div": {
                        padding: 0,
                    },
                    "& input": {
                        paddingRight: "14px",
                    },
                } }) })) : (_jsx(IconButton, { onClick: toggleSearch, sx: { padding: 0 }, children: _jsx(SearchIcon, { sx: { margin: 1, color: "button.tGrayFg" } }) })) }));
};
export default Search;
