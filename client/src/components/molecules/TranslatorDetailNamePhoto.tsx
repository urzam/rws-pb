import PersonIcon from "@mui/icons-material/Person";
import { Avatar, Box, Typography } from "@mui/material";

import { Translator } from "../../types/Translator";

export function TranslatorDetailNamePhoto({ data }: { data: Translator }) {
  return (
    <Box sx={{ display: "flex", mb: 1 }}>
      <Avatar
        src={data.photoUrl}
        variant="rounded"
        sx={{ mr: 4, width: 112, height: 112 }}
      >
        <PersonIcon />
      </Avatar>
      <Typography variant="h2" sx={{ display: "flex", alignItems: "center" }}>
        {data.name}
      </Typography>
    </Box>
  );
}
