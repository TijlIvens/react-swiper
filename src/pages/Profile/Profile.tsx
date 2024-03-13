import { Box } from "@mui/material";
import { Header } from "../../common/Header";
import { MaxWidth } from "../../common/MaxWidth";
import { ProfileInput } from "./partials/ProfileInput";
import { useState } from "react";
import { ProfileCard } from "./partials/ProfileCard";

export const ProfilePage = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  return (
    <Box flexGrow={1} display="flex" flexDirection="column">
      <Header title="Profile" />
      <MaxWidth>
        <ProfileCard name={name} description={description} />
        <ProfileInput
          name={name}
          onChangeName={setName}
          description={description}
          onChangeDescription={setDescription}
        />
      </MaxWidth>
    </Box>
  );
};
