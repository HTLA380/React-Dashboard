import React from "react";
import { Card, CardHeader, Grid, Stack, Typography } from "@mui/material";

interface TrafficBySiteInterface {
  title: string;
  items: {
    icon: React.ReactElement;
    number: string;
    name: string;
    iconColor: string;
  }[];
}

const TrafficBySite: React.FC<TrafficBySiteInterface> = ({ title, items }) => {
  return (
    <Card>
      <CardHeader title={title} />

      <Grid container spacing={2} sx={{ padding: "1rem 2rem 1.5rem" }}>
        {items.map((eachItem) => {
          return (
            <RenderSocialMedia
              icon={eachItem.icon}
              name={eachItem.name}
              iconColor={eachItem.iconColor}
              number={eachItem.number}
            />
          );
        })}
      </Grid>
    </Card>
  );
};

interface RenderSocialMediaInterface {
  icon: React.ReactElement;
  number: string;
  name: string;
  iconColor: string;
}

const RenderSocialMedia: React.FC<RenderSocialMediaInterface> = ({
  icon,
  number,
  name,
  iconColor: IconColor,
}) => {
  return (
    <Grid item xs={6}>
      <Stack
        alignItems={"center"}
        justifyContent={"center"}
        sx={{
          border: "1px dashed #dddddd",
          borderRadius: 3,
          padding: 3,
        }}>
        {/* =================== Icon ================== */}
        {React.cloneElement(icon, {
          sx: {
            width: 30,
            height: 30,
            marginBottom: 1,
            color: IconColor,
          },
        })}

        <Typography variant="h6">{number}</Typography>

        <Typography
          textTransform={"capitalize"}
          color={"text.secondary"}
          variant="body2">
          {name}
        </Typography>
      </Stack>
    </Grid>
  );
};

export default TrafficBySite;
