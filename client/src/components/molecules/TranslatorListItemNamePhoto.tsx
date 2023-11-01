import PersonIcon from "@mui/icons-material/Person";
import { Avatar, Box, Typography } from "@mui/material";

export default function TranslatorListItemNamePhoto({
  photoUrl,
  name,
}: {
  photoUrl: string;
  name: string;
}) {
  return (
    <Box sx={{ display: "flex", mb: 1 }}>
      <Avatar sx={{ mr: 2 }} src={photoUrl}>
        <PersonIcon />
      </Avatar>
      <Typography gutterBottom variant="h5">
        {name}
      </Typography>
    </Box>
  );
}
