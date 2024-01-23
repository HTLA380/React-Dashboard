import React from "react";
import {
  Box,
  Card,
  CardHeader,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import { formatDate } from "../../../utils/helper";

interface OrderTimeLineInterface {
  title: string;
  lists: {
    title: string;
    type: string;
    time: Date;
    id: string;
  }[];
}

const OrderTimeLine: React.FC<OrderTimeLineInterface> = ({ title, lists }) => {
  return (
    <Card>
      <CardHeader margin={3} title={title} />

      <List sx={{ padding: "0.8rem 2rem 2rem" }}>
        {lists.map((list, idx) => {
          return (
            <RenderOrder
              key={list.id}
              list={{ ...list, disableDivider: idx === lists.length - 1 }}
            />
          );
        })}
      </List>
    </Card>
  );
};

interface RenderOrderInterface {
  list: {
    title: string;
    type: string;
    time: Date;
    disableDivider?: boolean;
  };
}

const RenderOrder: React.FC<RenderOrderInterface> = ({ list }) => {
  const { title, type, time, disableDivider = false } = list;

  return (
    <ListItem alignItems="flex-start" disablePadding>
      <Stack
        alignItems={"center"}
        justifyContent={"center"}
        marginRight={2}
        gap={1}>
        <Box
          sx={{
            width: 13,
            height: 13,
            marginTop: 0.7,
            backgroundColor:
              (type === "order1" && "primary.main") ||
              (type === "order2" && "success.main") ||
              (type === "order3" && "info.main") ||
              (type === "order4" && "warning.main") ||
              "error.main",
            borderRadius: "100vmax",
          }}></Box>
        {!disableDivider && (
          <Box
            sx={{
              width: 2,
              height: 40,
              backgroundColor: "text.disabled",
            }}></Box>
        )}
      </Stack>

      <Box>
        <Typography variant="subtitle2" marginBottom={0.2}>
          {title}
        </Typography>
        <Typography variant="body2" color={"text.disabled"} fontSize={12}>
          {formatDate(time)}
        </Typography>
      </Box>
    </ListItem>
  );
};

export default OrderTimeLine;
