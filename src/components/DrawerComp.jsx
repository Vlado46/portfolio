import React, { useContext, useState } from "react";
import { Link } from "react-scroll/modules";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import {
  Box,
  Drawer,
  IconButton,
  List,
  Stack,
  Typography,
} from "@mui/material";
import ColorModeContext from "../context/toggle-theme-ctx";
import { useTheme } from "@emotion/react";

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  const themeIconHandler = () => {
    colorMode.toggleColorMode();
    setOpenDrawer(false);
  };

  return (
    <Box>
      <MenuIcon onClick={() => setOpenDrawer(true)} />
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Stack gap={2} marginY={8} paddingX={3}>
          <Link
            to="home"
            underline="none"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => setOpenDrawer(false)}
          >
            <Typography
              sx={{
                cursor: "pointer",
                "&:hover": {
                  opacity: 0.7,
                },
              }}
            >
              Home
            </Typography>
          </Link>
          <Link
            to="about"
            underline="none"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-110}
            duration={500}
            onClick={() => setOpenDrawer(false)}
          >
            <Typography
              sx={{
                cursor: "pointer",
                "&:hover": {
                  opacity: 0.7,
                },
              }}
            >
              About
            </Typography>
          </Link>
          <Link
            to="projects"
            underline="none"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => setOpenDrawer(false)}
          >
            <Typography
              sx={{
                cursor: "pointer",
                "&:hover": {
                  opacity: 0.7,
                },
              }}
            >
              Projects
            </Typography>
          </Link>
          <Link
            to="contact"
            underline="none"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => setOpenDrawer(false)}
          >
            <Typography
              sx={{
                cursor: "pointer",
                "&:hover": {
                  opacity: 0.7,
                },
              }}
            >
              Contact
            </Typography>
          </Link>
          <Box>
            <IconButton onClick={themeIconHandler} color="inherit">
              {theme.palette.mode === "dark" ? (
                <Brightness7Icon />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>
          </Box>
        </Stack>
      </Drawer>
    </Box>
  );
};

export default DrawerComp;
