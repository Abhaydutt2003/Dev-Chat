import { Box, useTheme, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";

import Logo from "../../assets/images/Dev.ico";

const DashboardLayout = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        p={2}
        sx={{
          backgroundColor: theme.palette.background.paper,
          boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
          height: "100vh",
          width: "100px",
        }}
      >
        <Stack
          direction={"column"}
          alignItems={"center"}
          sx={{ width: "100%" }}
        >
          <Box
            p={2}
            sx={{
              backgroundColor: theme.palette.primary.main,
              width: "64px",
              height: "64px",
              borderRadius: "12px",
              boxSizing: "border-box",
            }}
          >
            <img src={Logo} alt="Dev-Chat-Image" />
          </Box>
        </Stack>
      </Box>
      <Outlet />
    </>
  );
};

export default DashboardLayout;
