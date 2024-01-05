import React from "react";
import { StyledCard } from "../../components/Styles";
import { Box, List, ListItem, Stack, Typography } from "@mui/material";

interface RenderOrderInterface {
  name: string;
  date: string;
  dotColor: string;
  disableBorder?: boolean;
}

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
              backgroundColor: "secondary.light",
            }}></Box>
        )}
      </Stack>

      <Box>
        <Typography variant="body1" marginBottom={0.2}>
          {name}
        </Typography>
        <Typography variant="body2" color={"secondary.main"} fontSize={13}>
          {date}
        </Typography>
      </Box>
    </ListItem>
  );
};

const OrderTimeLine: React.FC = () => {
  return (
    <StyledCard>
      <Box margin={3}>
        <Typography variant="h5">Order TimeLine</Typography>
      </Box>

      <List sx={{ padding: "0 2rem 2rem" }}>
        <RenderOrder
          name="1983, orders, $4220"
          dotColor="rgb(54, 162, 235)"
          date="16 Nov 2023 3:21 PM"
        />
        <RenderOrder
          name="
          12 Invoices have been paid"
          dotColor="rgb(0, 175, 111)"
          date="22 Jan 2023 10:02 AM"
        />
        <RenderOrder
          name="Order #37745 from September"
          dotColor="rgb(0, 184, 217)"
          date="01 Apr 2023 6:22 PM"
        />
        <RenderOrder
          name="New order placed #XF-2356"
          dotColor="rgb(255, 171, 0)"
          date="15 Jun 2023 6:03 PM"
        />
        <RenderOrder
          name="New order placed #XF-2346"
          dotColor="rgb(255, 86, 48)"
          date="07 Oct 2023 6:59 PM"
          disableBorder
        />
      </List>
    </StyledCard>
  );
};

export default OrderTimeLine;
