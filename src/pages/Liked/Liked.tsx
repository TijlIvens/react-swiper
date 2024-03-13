import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Header } from "../../common/Header";
import { people } from "../../constants";
import { LikedPersonCard } from "./partials/LikedPersonCard";
import { MaxWidth } from "../../common/MaxWidth";

export const LikedPage = () => {
  const likedIds = JSON.parse(localStorage.getItem("likedIds") ?? "[]");

  const likedPeople = people.filter((person) =>
    likedIds?.includes(person.id.toString())
  );

  return (
    <Box flexGrow={1} display="flex" flexDirection="column">
      <Header title="Liked" />
      <MaxWidth>
        <Grid container spacing={2}>
          {likedPeople.map((person) => (
            <Grid xs={6} key={person.id}>
              <LikedPersonCard name={person.name} imageUrl={person.image} />
            </Grid>
          ))}
        </Grid>
      </MaxWidth>
    </Box>
  );
};
