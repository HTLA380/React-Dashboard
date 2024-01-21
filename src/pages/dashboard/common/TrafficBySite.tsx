import React from "react";
import { Card, CardHeader, Grid, Stack, Typography } from "@mui/material";
import { Facebook, Google, LinkedIn, Twitter } from "@mui/icons-material";

const TrafficBySite: React.FC = () => {
  return (
    <Card>
      <CardHeader title="Traffic by Site" />

      <Grid container spacing={2} sx={{ padding: "1rem 2rem 1.5rem" }}>
        <RenderSocialMedia
          Icon={
            <Facebook
              sx={{
                width: 35,
                height: 35,
                marginBottom: 1,
                color: "primary.main",
              }}
            />
          }
          name="facebook"
          number="323.23k"
        />
        <RenderSocialMedia
          Icon={
            <Google
              sx={{
                width: 35,
                height: 35,
                marginBottom: 1,
                color: "error.main",
              }}
            />
          }
          name="google"
          number="341.21k"
        />

        <RenderSocialMedia
          Icon={
            <LinkedIn
              sx={{
                width: 35,
                height: 35,
                marginBottom: 1,
                color: "primary.dark",
              }}
            />
          }
          name="Linkedin"
          number="411.21k"
        />
        <RenderSocialMedia
          Icon={
            <Twitter
              sx={{
                width: 35,
                height: 35,
                marginBottom: 1,
                color: "info.dark",
              }}
            />
          }
          name="Twitter"
          number="443.23k"
        />
      </Grid>
    </Card>
  );
};

const RenderSocialMedia: React.FC<RenderSocialMediaInterface> = ({
  Icon,
  number,
  name,
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
        {Icon}
        <Typography variant="h6">{number}</Typography>
        <Typography
          variant="body2"
          textTransform={"uppercase"}
          fontSize={12}
          color={"text.secondary"}>
          {name}
        </Typography>
      </Stack>
    </Grid>
  );
};

interface RenderSocialMediaInterface {
  Icon: React.ReactElement;
  number: string;
  name: string;
}

export default TrafficBySite;
