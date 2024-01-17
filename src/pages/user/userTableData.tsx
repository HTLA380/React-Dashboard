import Box from "@mui/material/Box";
import { GridColDef } from "@mui/x-data-grid";
import { Avatar, Typography } from "@mui/material";
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
      return <Typography fontWeight={"semi-bold"}>{params.value}</Typography>;
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
    username: "Cersei Lannister",
    avatar: userImgs[2],
    company: "Predovic - Glover",
    role: "UI/UX Designer",
    verified: "Yes",
    status: "Banned",
  },
  {
    id: 2,
    username: "Arya Stark",
    avatar: userImgs[4],
    company: "Herman and Sons",
    role: "UI Designer",
    verified: "Yes",
    status: "Banned",
  },
  {
    id: 3,
    username: "Daenerys Targaryen",
    avatar: userImgs[5],
    company: "	Weissnat Group",
    role: "UI Designer",
    verified: "No",
    status: "Banned",
  },

  {
    id: 4,
    username: "Gerard Bogisich",
    avatar: userImgs[6],
    company: "Considine - Runte",
    role: "Hr Manager",
    verified: "Yes",
    status: "Active",
  },
  {
    id: 5,
    username: "Jennifer Botsford",
    avatar: userImgs[7],
    company: "Yost, Labadie and Gleichner",
    role: "	UX Designer",
    verified: "No",
    status: "Active",
  },
  {
    id: 6,
    username: "Homer Borer DDS",
    avatar: userImgs[8],
    company: "Upton LLC",
    role: "	Front End Developer",
    verified: "No",
    status: "Banned",
  },
  {
    id: 7,
    username: "Jon Snow",
    avatar: userImgs[0],
    company: "Nikolaus - Rogahn",
    role: "UI/UX Designer",
    verified: "No",
    status: "Banned",
  },
  {
    id: 8,
    username: "Jaime Lannister",
    avatar: userImgs[3],
    company: "Nikolaus - Davis",
    role: "Project Manager",
    verified: "No",
    status: "Active",
  },
  {
    id: 9,
    username: "Ignacio Becker DVM",
    avatar: userImgs[9],
    company: "Leuschke - McClure",
    role: "Full Stack Designer",
    verified: "No",
    status: "Banned",
  },
  {
    id: 10,
    username: "Jeff Purdy",
    avatar: userImgs[10],
    company: "	Bins Inc",
    role: "	Leader",
    verified: "No",
    status: "Active",
  },
  {
    id: 11,
    username: "Dr. Camille Satterfield",
    avatar: userImgs[11],
    company: "Keeling - Turner",
    role: "UX Designer",
    verified: "No",
    status: "Active",
  },
  {
    id: 12,
    username: "Denise Hammes",
    avatar: userImgs[12],
    company: "Padberg, Wolf and Bednar",
    role: "UI Designer",
    verified: "No",
    status: "Active",
  },
  {
    id: 13,
    username: "Brian Gutmann",
    avatar: userImgs[13],
    company: "Abbott LLC",
    role: "Backend Developer",
    verified: "No",
    status: "Active",
  },
  {
    id: 14,
    username: "Antonia Altenwerth II",
    avatar: userImgs[14],
    company: "Ullrich and Sons",
    role: "Full Stack Developer",
    verified: "Yes",
    status: "Active",
  },
  {
    id: 15,
    username: "Alexander Miller",
    avatar: userImgs[15],
    company: "Medhurst, Hilll and Tromp",
    role: "		Hr Manager",
    verified: "No",
    status: "Active",
  },
  {
    id: 16,
    username: "Mr. Darin Schumm",
    avatar: userImgs[16],
    company: "Pagac and Sons",
    role: "Hr Manager",
    verified: "Yes",
    status: "Active",
  },
  {
    id: 17,
    username: "Melissa Gulgowski",
    avatar: userImgs[17],
    company: "Kohler - Batz",
    role: "UX Designer",
    verified: "Yes",
    status: "Banned",
  },
  {
    id: 18,
    username: "Melba Ortiz",
    avatar: userImgs[18],
    company: "Green, Watsica and Lang",
    role: "Hr Manager",
    verified: "No",
    status: "Active",
  },
  {
    id: 19,
    username: "Karl Jacobs I",
    avatar: userImgs[19],
    company: "Larkin - O'Connell",
    role: "	Project Manager",
    verified: "No",
    status: "Active",
  },
  {
    id: 20,
    username: "Jesus Denesik PhD",
    avatar: userImgs[20],
    company: "Kub LLC",
    role: "			Project Manager",
    verified: "No",
    status: "Banned",
  },
  {
    id: 21,
    username: "Drew Turcotte III",
    avatar: userImgs[21],
    company: "Little LLC",
    role: "Full Stack Developer",
    verified: "Yes",
    status: "Banned",
  },
  {
    id: 22,
    username: "Ebony Bins",
    avatar: userImgs[22],
    company: "Heathcote, Bergstrom and Raynor",
    role: "	Hr Manager",
    verified: "No",
    status: "Active",
  },
  {
    id: 23,
    username: "Harold Anderson",
    avatar: userImgs[23],
    company: "Shanahan, Weber and Green",
    role: "	Backend Developer",
    verified: "No",
    status: "Banned",
  },
  {
    id: 24,
    username: "Ivan Jenkins",
    avatar: userImgs[24],
    company: "Goodwin LLC",
    role: "UI Designer",
    verified: "Yes",
    status: "Active",
  },
];
