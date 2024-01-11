import Box from "@mui/material/Box";
import { GridColDef } from "@mui/x-data-grid";
import { Avatar, Typography } from "@mui/material";
import { user, user2, user3, user4, user5 } from "../../assets/users/userImg";

export const columns: GridColDef[] = [
  {
    field: "user",
    headerName: "Name",
    flex: 1,
    renderCell: (params) => {
      return (
        <>
          <Avatar src={params.value.avatar} sx={{ marginRight: 1 }} />
          <Typography fontWeight={"semi-bold"}>
            {params.value.username}
          </Typography>
        </>
      );
    },
  },
  {
    field: "company",
    headerName: "Company",
    flex: 1,
  },
  { field: "role", headerName: "Role", flex: 1 },
  {
    field: "verified",
    headerName: "Verified",
    flex: 1,
  },
  {
    field: "status",
    headerName: "Status",
    flex: 1,
    renderCell: (params) => {
      return (
        <Box
          sx={{
            backgroundColor:
              params.value == "Banned" ? "#ff563029" : "#00a76f29",
            color: params.value == "Banned" ? "#b71d18" : "#007867",
            padding: "0.2rem 0.4rem",
            fontSize: 12,
            fontWeight: "medium",
            borderRadius: 2,
          }}>
          {params.value}
        </Box>
      );
    },
  },
];

export const rows = [
  {
    id: 1,
    user: {
      username: "Jon Snow",
      avatar: user,
    },
    company: "Nikolaus - Rogahn",
    role: "UI/UX Designer",
    verified: "No",
    status: "Banned",
  },
  {
    id: 2,
    user: {
      username: "Cersei Lannister",
      avatar: user2,
    },
    company: "Predovic - Glover",
    role: "UI/UX Designer",
    verified: "Yes",
    status: "Banned",
  },
  {
    id: 3,
    user: {
      username: "Jaime Lannister",
      avatar: user3,
    },
    company: "Nikolaus - Davis",
    role: "Project Manager",
    verified: "No",
    status: "Active",
  },
  {
    id: 4,
    user: {
      username: "Arya Stark",
      avatar: user4,
    },
    company: "Herman and Sons",
    role: "UI Designer",
    verified: "Yes",
    status: "Banned",
  },
  {
    id: 5,
    user: {
      username: "Daenerys Targaryen",
      avatar: user5,
    },
    company: "	Weissnat Group",
    role: "UI Designer",
    verified: "No",
    status: "Banned",
  },

  {
    id: 6,
    user: {
      username: "Gerard Bogisich",
      avatar: user,
    },
    company: "Considine - Runte",
    role: "Hr Manager",
    verified: "Yes",
    status: "Active",
  },
  {
    id: 7,
    user: {
      username: "Jennifer Botsford",
      avatar: user2,
    },
    company: "Yost, Labadie and Gleichner",
    role: "	UX Designer",
    verified: "No",
    status: "Active",
  },
  {
    id: 8,
    user: {
      username: "Homer Borer DDS",
      avatar: user3,
    },
    company: "Upton LLC",
    role: "	Front End Developer",
    verified: "No",
    status: "Banned",
  },
  {
    id: 9,
    user: {
      username: "Ignacio Becker DVM",
      avatar: user4,
    },
    company: "Leuschke - McClure",
    role: "Full Stack Designer",
    verified: "No",
    status: "Banned",
  },
  {
    id: 10,
    user: {
      username: "Jeff Purdy",
      avatar: user5,
    },
    company: "	Bins Inc",
    role: "	Leader",
    verified: "No",
    status: "Active",
  },
];
