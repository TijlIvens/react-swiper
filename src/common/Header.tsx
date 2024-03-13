import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { FC } from "react";

type HeaderProps = {
  title: string;
};

export const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <AppBar>
      <Toolbar>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          width={1}
        >
          <Box maxWidth="500px" width={1}>
            <Typography>{title}</Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
