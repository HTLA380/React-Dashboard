import React from "react";
import { StyledCard } from "../../../components/Styles";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { Facebook, Google, LinkedIn, Twitter } from "@mui/icons-material";

interface RenderSocialMediaInterface {
  Icon: React.ReactElement;
  number: string;
  name: string;
}

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
        <Typography variant="h5">{number}</Typography>
        <Typography
          variant="body2"
          textTransform={"uppercase"}
          fontSize={13}
          color={"secondary.dark"}>
          {name}
        </Typography>
      </Stack>
    </Grid>
  );
};

const SocialMedia: React.FC = () => {
  return (
    <StyledCard>
      <Box margin={3}>
        <Typography variant="h5">Traffic by Site</Typography>
      </Box>

      <Grid container spacing={2} sx={{ padding: "1rem 2rem 1.5rem" }}>
        <RenderSocialMedia
          Icon={
            <Facebook
              sx={{
                width: 35,
                height: 35,
                marginBottom: 1,
                color: "rgb(24, 119, 242)",
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
                color: "rgb(255, 86, 48)",
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
                color: "rgb(35, 93, 156)",
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
                color: "rgb(28, 156, 234)",
              }}
            />
          }
          name="Twitter"
          number="443.23k"
        />
      </Grid>
    </StyledCard>
  );
};

export default SocialMedia;
