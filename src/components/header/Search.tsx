import { Grow, IconButton, InputAdornment, TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

const Search = () => {
  const [showSearch, setShowSearch] = useState(false); // State to toggle search box visibility
  const [searchTerm, setSearchTerm] = useState(""); // State to manage search input
  const searchInputRef = useRef<HTMLInputElement>(null); // Ref to focus the search input

  // Handle changes in the search input
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && showSearch) {
        setShowSearch(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showSearch]);

  return (
    <>
      {showSearch ? (
        <Grow in={showSearch} timeout={500}>
          <TextField
            variant="outlined"
            placeholder="جستجو..."
            size="small"
            value={searchTerm}
            onChange={handleSearchChange}
            inputRef={searchInputRef}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              endAdornment: searchTerm ? (
                <InputAdornment position="end">
                  <IconButton
                    onClick={clearSearch}
                    aria-label="clear search"
                    sx={{ padding: 0 }}
                  >
                    <CloseIcon sx={{ margin: 1, color: "button.tGrayFg" }} />
                  </IconButton>
                </InputAdornment>
              ) : null,
            }}
            sx={{
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
            }}
          />
        </Grow>
      ) : (
        <IconButton onClick={toggleSearch} sx={{ padding: 0 }}>
          <SearchIcon sx={{ margin: 1, color: "button.tGrayFg" }} />
        </IconButton>
      )}
    </>
  );
};

export default Search;
