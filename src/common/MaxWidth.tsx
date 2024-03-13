import { Box } from "@mui/material";
import { FC } from "react";

type MaxWidthProps = {
  children: React.ReactNode;
};

export const MaxWidth: FC<MaxWidthProps> = ({ children }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      flexGrow={1}
      width={1}
    >
      <Box
        maxWidth="500px"
        flexGrow={1}
        width={1}
        paddingTop={12}
        display="flex"
        flexDirection="column"
      >
        {children}
      </Box>
    </Box>
  );
};
