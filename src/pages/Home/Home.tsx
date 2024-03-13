import { Box } from "@mui/material";
import { Header } from "../../common/Header";
import { MaxWidth } from "../../common/MaxWidth";
import { JudgeCard } from "./partials/JudgeCard";
import { useState } from "react";
import { people } from "../../constants";
import { JudgeButtons } from "./partials/JudgeButtons";

export const HomePage = () => {
  const [shownIndex, setShownIndex] = useState(0);

  const shownPerson = people[shownIndex];

  const onLike = () => {
    const likedIds = JSON.parse(localStorage.getItem("likedIds") ?? "[]");
    const newLikedIds = [...likedIds, shownPerson.id];

    localStorage.setItem("likedIds", JSON.stringify(newLikedIds));
    setShownIndex((prevIndex) => (prevIndex + 1) % people.length);
  };

  const onDislike = () => {
    setShownIndex((prevIndex) => (prevIndex + 1) % people.length);
  };

  return (
    <Box flexGrow={1} display="flex" flexDirection="column">
      <Header title="Home" />
      <MaxWidth>
        <JudgeCard
          name={shownPerson.name}
          imageUrl={shownPerson.image}
          description={shownPerson.description}
          interests={shownPerson.interests}
        />
        <JudgeButtons onDislike={onDislike} onLike={onLike} />
      </MaxWidth>
    </Box>
  );
};
