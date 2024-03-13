import { Box, Button } from "@mui/material";
import { FC } from "react";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteIcon from "@mui/icons-material/Favorite";

type JudgeButtonsProps = {
  onDislike: () => void;
  onLike: () => void;
};

export const JudgeButtons: FC<JudgeButtonsProps> = ({ onDislike, onLike }) => {
  return (
    <Box display="flex" gap={2} paddingY={2}>
      <Button
        onClick={onDislike}
        variant="contained"
        color="error"
        sx={{ flexGrow: 1, height: 70 }}
      >
        <CloseIcon fontSize="large" />
      </Button>
      <Button
        onClick={onLike}
        variant="contained"
        color="success"
        sx={{ flexGrow: 1, height: 70 }}
      >
        <FavoriteIcon fontSize="large" />
      </Button>
    </Box>
  );
};
