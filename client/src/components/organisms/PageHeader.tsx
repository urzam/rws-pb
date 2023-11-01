import { Link } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import { AppBar, Toolbar, Typography } from "@mui/material";

export type PageHeaderProps = {
  title: string;
};

export default function PageHeader({ title }: PageHeaderProps) {
  return (
    <AppBar>
      <Toolbar>
        <Link to="/">
          <HomeIcon
            sx={{
              mr: 1,
              color: "white",
            }}
          />
        </Link>
        <Typography variant="h6" sx={{ flexGrow: 1, textAlign: "center" }}>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
