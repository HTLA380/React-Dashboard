import Box from "@mui/material/Box";
import { GridColDef } from "@mui/x-data-grid";
import { Avatar, Typography } from "@mui/material";
import { faker } from "@faker-js/faker";
import { sample } from "lodash";
import userImgs from "../../assets/users/userImg";

export const columns: GridColDef[] = [
  {
    field: "avatar",
    headerName: "Avatar",
    width: 80,
    renderCell: (params) => {
      return (
        <>
          <Avatar src={params.value} alt="avatar"></Avatar>
        </>
      );
    },
    sortable: false,
  },
  {
    field: "username",
    headerName: "Name",
    minWidth: 160,
    flex: 1,
    renderCell: (params) => {
      return (
        <Typography fontWeight={600} variant="body2">
          {params.value}
        </Typography>
      );
    },
  },
  {
    field: "company",
    headerName: "Company",
    minWidth: 180,
    flex: 1,
  },
  { field: "role", headerName: "Role", minWidth: 160, flex: 1 },
  {
    field: "verified",
    headerName: "Verified",
    minWidth: 100,
    renderCell: (params) => (params.value ? "Yes" : "No"),
  },
  {
    field: "status",
    headerName: "Status",
    flex: 1,
    minWidth: 100,
    renderCell: (params) => {
      return (
        <Box
          sx={{
            backgroundColor:
              params.value == "banned" ? "#ff563029" : "#00a76f29",
            color: params.value == "banned" ? "#b71d18" : "#007867",
            padding: "0.2rem 0.4rem",
            fontSize: 12,
            fontWeight: "medium",
            borderRadius: 2,
            textTransform: "capitalize",
          }}>
          {params.value}
        </Box>
      );
    },
  },
];

export const users = [...Array(24)].map((_, index) => ({
  id: faker.string.uuid(),
  avatar: userImgs[index],
  username: faker.person.fullName(),
  company: faker.company.name(),
  verified: faker.datatype.boolean(),
  status: sample(["active", "banned"]),
  role: sample([
    "Leader",
    "Hr Manager",
    "UI Designer",
    "UX Designer",
    "UI/UX Designer",
    "Project Manager",
    "Backend Developer",
    "Full Stack Designer",
    "Front End Developer",
    "Full Stack Developer",
  ]),
}));
