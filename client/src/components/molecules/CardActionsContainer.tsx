import { Link } from "react-router-dom";

import { Box, Button, CardActions } from "@mui/material";

import { TranslatorLanguages } from "../../types/Translator";
import LanguagesChips from "../atoms/LanguagesChips";

export default function CardActionsContainer({
  id,
  languages,
}: {
  id: string;
  languages: TranslatorLanguages;
}) {
  const detailLink = `/detail/${id}`;

  return (
    <CardActions>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Link to={detailLink}>
          <Button size="small" color="primary">
            Detail
          </Button>
        </Link>
        <LanguagesChips languages={languages} />
      </Box>
    </CardActions>
  );
}
