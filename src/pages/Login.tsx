import {
  Box,
  Button,
  Card,
  Divider,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { primary } from "../theme/palette";
import { Facebook, Google, Twitter } from "@mui/icons-material";
import { StyledStackRowBetween } from "../components/Styles";
import { grey } from "@mui/material/colors";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment } from "@mui/material";
import { useState } from "react";

const StyledContainer = styled(Box)({
  minHeight: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "1rem",
});

const StyledLogo = styled(Link)(({ theme }) => ({
  display: "block",
  textDecoration: "none",
  position: "absolute",
  top: 40,
  left: 40,
  color: theme.palette.primary.main,
  fontWeight: 700,
  fontSize: 20,
}));

const StyledIconButton = styled(Button)(({ theme }) => ({
  width: "100%",
  padding: "0.8rem 0",
  backgroundColor: theme.palette.common.white,
  border: "1px solid #e6e6e6",
  ":hover": {
    backgroundColor: grey[200],
  },
}));

const StyledForm = styled("form")({
  gap: "1.25rem",
  marginTop: "1.25rem",
  display: "flex",
  flexDirection: "column",
});

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const renderIconButtons = (
    <>
      <StyledIconButton>
        <Google color="error" />
      </StyledIconButton>

      <StyledIconButton>
        <Facebook color="primary" />
      </StyledIconButton>

      <StyledIconButton>
        <Twitter color="info" />
      </StyledIconButton>
    </>
  );

  const renderEmailInput = (
    <TextField id="email" label="Email address" variant="outlined" fullWidth />
  );

  const renderPasswordInput = (
    <TextField
      type={showPassword ? "text" : "password"}
      label="Password"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end">
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      fullWidth
    />
  );

  const renderForgetPassword = (
    <Typography
      variant="subtitle2"
      textAlign={"end"}
      color={"primary"}
      sx={{ ":hover": { textDecoration: "underline" } }}>
      Forgot password?
    </Typography>
  );

  const renderDivider = (
    <Divider
      sx={{ marginTop: 3 }}
      children={
        <Typography color={"text.disabled"} variant="body2">
          OR
        </Typography>
      }></Divider>
  );

  return (
    <StyledContainer>
      <StyledLogo to={"/"}>ReactBoard</StyledLogo>

      <Card
        sx={{
          width: 1,
          maxWidth: 420,
          padding: 4,
          marginTop: 5,
        }}>
        <Typography variant="h5">Sign in to ReactBoard</Typography>

        <Typography variant="body2" marginTop={1.5}>
          Don't have an account?
          <Box
            component={"span"}
            sx={{
              fontWeight: "bold",
              textDecoration: "underline",
              textDecorationColor: primary.light,
              color: "primary.main",

              ":hover": {
                textDecorationColor: primary.main,
              },
            }}>
            {" "}
            Get started
          </Box>
        </Typography>

        <StyledStackRowBetween gap={2} marginTop={4}>
          {renderIconButtons}
        </StyledStackRowBetween>

        {renderDivider}

        <StyledForm>
          {renderEmailInput}
          {renderPasswordInput}
          {renderForgetPassword}

          <Button size="large" type="submit">
            Login
          </Button>
        </StyledForm>
      </Card>
    </StyledContainer>
  );
};

export default Login;
