import { Alert, Box } from "@mui/material";

export function NoDataWarningMessage() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Alert severity="warning" sx={{ width: 400 }}>
        No Data!
      </Alert>
    </Box>
  );
}
