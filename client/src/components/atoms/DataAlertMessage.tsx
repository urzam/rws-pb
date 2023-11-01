import { Alert, Box } from "@mui/material";

export function DataAlertMessage() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Alert severity="error" sx={{ width: 400 }}>
        An error has occurred during loading data.
      </Alert>
    </Box>
  );
}
