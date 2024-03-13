import { Card, CardContent, Typography } from "@mui/material";
import { FC } from "react";

type LikedPersonCardProps = {
  imageUrl: string;
  name: string;
};

export const LikedPersonCard: FC<LikedPersonCardProps> = ({
  imageUrl,
  name,
}) => {
  return (
    <Card>
      <img
        alt="person"
        style={{ height: 300, width: "100%", objectFit: "cover" }}
        src={imageUrl}
      />
      <CardContent>
        <Typography variant="h5">{name}</Typography>
      </CardContent>
    </Card>
  );
};
