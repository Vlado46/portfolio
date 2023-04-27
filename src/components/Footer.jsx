import React from "react";
import { Box, IconButton, Paper, Stack, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Paper elevation={4} square={true}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        paddingX="2%"
        paddingY={1.5}
        marginTop={15}
      >
        <Typography variant="subtitle2">vladimirbaseski46@gmail.com</Typography>
        <Box display="flex" gap={2}>
          <IconButton
            href="https://www.linkedin.com/in/vladimir-basheski-61a822254/"
            target="_blank"
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton href="https://github.com/Vlado46" target="_blank">
            <GitHubIcon />
          </IconButton>
          <IconButton
            href="https://www.facebook.com/vladimir.baseski"
            target="_blank"
          >
            <FacebookIcon />
          </IconButton>
        </Box>
      </Stack>
    </Paper>
  );
};

export default Footer;
