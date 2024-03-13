import { Box, TextField } from "@mui/material";
import { FC } from "react";

type ProfileInputProps = {
  name: string;
  onChangeName: (name: string) => void;
  description: string;
  onChangeDescription: (description: string) => void;
};

export const ProfileInput: FC<ProfileInputProps> = ({
  name,
  onChangeName,
  description,
  onChangeDescription,
}) => {
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <TextField
        label="Name"
        placeholder="Your name"
        value={name}
        onChange={(event) => onChangeName(event.target.value)}
      />
      <TextField
        label="Description"
        multiline
        placeholder="Write your bio"
        rows={4}
        value={description}
        onChange={(event) => onChangeDescription(event.target.value)}
      />
    </Box>
  );
};
