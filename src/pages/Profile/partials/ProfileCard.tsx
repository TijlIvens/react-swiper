import { Card, CardContent, Typography } from "@mui/material";
import { FC } from "react";

type ProfileCardProps = {
  name: string;
  description: string;
};

export const ProfileCard: FC<ProfileCardProps> = ({ name, description }) => {
  return (
    <Card sx={{ marginBottom: 5 }}>
      <CardContent>
        <Typography variant="h5">{name}</Typography>
        <Typography>{description}</Typography>
      </CardContent>
    </Card>
  );
};
