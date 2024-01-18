import { Add } from "@mui/icons-material";
import { Container, Typography } from "@mui/material";
import React from "react";
import UserTable from "./UserTable";
import {
  StyledDeepBlueBtn,
  StyledStackRowBetween,
} from "../../components/Styles";

const User: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <StyledStackRowBetween marginBottom={5}>
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "1.4rem", sm: "1.6rem" },
          }}>
          Users
        </Typography>
        <StyledDeepBlueBtn>
          <Add fontSize="small" />
          <Typography component={"span"} marginLeft={0.2}>
            New User
          </Typography>
        </StyledDeepBlueBtn>
      </StyledStackRowBetween>

      <UserTable />
    </Container>
  );
};

export default User;
