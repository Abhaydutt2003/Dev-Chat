import {
  Box,
  useTheme,
  Stack,
  IconButton,
  Divider,
  Avatar,
} from "@mui/material";
import {MaterialUISwitch} from '../../styled';
import { Outlet } from "react-router-dom";
import { faker } from "@faker-js/faker";
import Logo from "../../assets/images/Dev.ico";
import { Nav_Buttons } from "../../data/index";
import { Gear } from "phosphor-react";
import { useState } from "react";

const DashboardLayout = () => {
  const theme = useTheme();
  //state to know which element is currently selected
  const [selected, setSelected] = useState(0);
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
          alignItems={"center"}
          justifyContent={"space-between"}
          sx={{ width: "100%", height: "100%" }}
          spacing={3}
        >
          <Stack alignItems={"center"} spacing={3}>
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
            {Nav_Buttons.map((ic) => {
              const isSelected = ic.index === selected;
              return (
                <Box
                  key={ic.index}
                  p={1}
                  sx={{
                    boxSizing: "border-box",
                    backgroundColor: isSelected
                      ? theme.palette.primary.main
                      : "",
                    borderRadius: "12px",
                  }}
                >
                  <IconButton
                    onClick={() => setSelected(ic.index)}
                    sx={{ color: isSelected ? "#fff" : "#000" }}
                  >
                    {ic.icon}
                  </IconButton>
                </Box>
              );
            })}
            <Divider sx={{ width: "70px" }} />
            <IconButton>
              <Gear></Gear>
            </IconButton>
          </Stack>
          <Stack alignItems={"center"} spacing={3}>
            <MaterialUISwitch defaultChecked  />
            <Avatar src={faker.image.avatar()}></Avatar>
          </Stack>
        </Stack>
      </Box>
      <Outlet />
    </>
  );
};

export default DashboardLayout;
