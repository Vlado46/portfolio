import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import image from "../assets/images/20230425_220035.jpeg";
import CV from "../assets/cv/Vladimir_Basheski_Resume.pdf";
import DownloadIcon from "@mui/icons-material/Download";

const Home = () => {
  return (
    <section id="home">
      <Stack
        direction={{ md: "row" }}
        paddingY={{ xs: 3, md: 20 }}
        marginBottom={15}
        gap={{ xs: 6, md: 12 }}
      >
        <Box display="flex" justifyContent="center" marginBottom={2}>
          <img className="profile-img" src={image} />
        </Box>
        <Stack gap={5} justifyContent="flex-start">
          <Typography
            sx={{ typography: { xs: "h3", sm: "h1" } }}
            fontWeight="bold"
            color="secondary"
          >
            Hi, i'm Vlado!
          </Typography>
          <Typography sx={{ typography: { xs: "h5", sm: "h5" } }}>
            A web developer based in Skopje. Working towards creating software
            with passion for functional and responsive design.
          </Typography>
          <Box component="span" marginTop={3}>
            <Button variant="contained" color="secondary" href={CV} download>
              <DownloadIcon />
              <Typography marginLeft={1}>Download CV</Typography>
            </Button>
          </Box>
        </Stack>
      </Stack>
    </section>
  );
};

export default Home;
