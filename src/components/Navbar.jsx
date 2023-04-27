import { Box, IconButton, Paper, Stack, Typography } from "@mui/material";
import { Link } from "react-scroll/modules";
import React, { useContext } from "react";
import ColorModeContext from "../context/toggle-theme-ctx";
import { useTheme } from "@emotion/react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import "../App.css";

const Navbar = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <Paper
      elevation={4}
      square={true}
      sx={{ position: "sticky", top: 0, zIndex: 1 }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        paddingX={3}
        paddingY={1.5}
      >
        <Typography variant="h6">Vladimir Basheski</Typography>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Link
            to="home"
            underline="none"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
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
            <IconButton onClick={colorMode.toggleColorMode} color="inherit">
              {theme.palette.mode === "dark" ? (
                <Brightness7Icon />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>
          </Box>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default Navbar;
