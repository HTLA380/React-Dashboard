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

const OrderTimeLine: React.FC = () => {
  return (
    <Card>
      <CardHeader margin={3} title="Order TimeLine" />

      <List sx={{ padding: "0.8rem 2rem 2rem" }}>
        <RenderOrder
          name="1983, orders, $4220"
          dotColor="primary.main"
          date="16 Nov 2023 3:21 PM"
        />
        <RenderOrder
          name="
          12 Invoices have been paid"
          dotColor="success.main"
          date="22 Jan 2023 10:02 AM"
        />
        <RenderOrder
          name="Order #37745 from September"
          dotColor="info.main"
          date="01 Apr 2023 6:22 PM"
        />
        <RenderOrder
          name="New order placed #XF-2356"
          dotColor="warning.main"
          date="15 Jun 2023 6:03 PM"
        />
        <RenderOrder
          name="New order placed #XF-2346"
          dotColor="error.main"
          date="07 Oct 2023 6:59 PM"
          disableBorder
        />
      </List>
    </Card>
  );
};

const RenderOrder: React.FC<RenderOrderInterface> = ({
  name,
  date,
  dotColor,
  disableBorder = false,
}) => {
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
            backgroundColor: dotColor,
            borderRadius: "100vmax",
          }}></Box>
        {!disableBorder && (
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
          {name}
        </Typography>
        <Typography variant="body2" color={"text.disabled"} fontSize={12}>
          {date}
        </Typography>
      </Box>
    </ListItem>
  );
};

interface RenderOrderInterface {
  name: string;
  date: string;
  dotColor: string;
  disableBorder?: boolean;
}

export default OrderTimeLine;
