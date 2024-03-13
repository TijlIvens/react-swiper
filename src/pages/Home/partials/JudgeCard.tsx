import { Card, CardContent, Chip, Stack, Typography } from "@mui/material";
import { FC } from "react";

type JudgeCardProps = {
  imageUrl: string;
  name: string;
  description: string;
  interests: string[];
};

export const JudgeCard: FC<JudgeCardProps> = ({
  imageUrl,
  name,
  description,
  interests,
}) => {
  return (
    <Card sx={{ display: "flex", flexGrow: 1, flexDirection: "column" }}>
      <img
        alt="judge"
        src={imageUrl}
        style={{ width: "100%", flexGrow: 1, objectFit: "cover" }}
      />
      <CardContent>
        <Typography variant="h5">{name}</Typography>
        <Typography>{description}</Typography>
        <Stack direction="row" spacing={1} sx={{ marginTop: 2 }}>
          {interests.map((interest) => (
            <Chip label={interest} key={interest} />
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
};
