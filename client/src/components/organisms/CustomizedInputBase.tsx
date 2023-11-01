import debounce from "lodash.debounce";
import { useCallback, useState } from "react";

import ClearIcon from "@mui/icons-material/Clear";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";

export default function CustomizedInputBase({
  setSearchQuery,
}: {
  setSearchQuery: (search: string | undefined) => void;
}) {
  const [searchTerm, setSearchTerm] = useState<string | undefined>("");

  const debouncedSearch = useCallback(
    debounce((term: string) => {
      setSearchQuery(term);
    }, 500),
    []
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);
    debouncedSearch(term);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mb: 4,
      }}
    >
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 400,
        }}
      >
        <InputBase
          sx={{ m: 1, flex: 1 }}
          placeholder="Search Translators"
          inputProps={{ "aria-label": "search google maps" }}
          onChange={handleChange}
          value={searchTerm}
        />
        {searchTerm && searchTerm !== "" && (
          <IconButton
            type="button"
            sx={{ p: 1 }}
            aria-label="search"
            onClick={() => {
              setSearchTerm("");
              setSearchQuery("");
            }}
          >
            <ClearIcon />
          </IconButton>
        )}
      </Paper>
    </Box>
  );
}
