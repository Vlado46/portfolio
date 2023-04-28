import React from "react";
import { Button, Paper, Stack, Typography } from "@mui/material";
import eCommerce from "../assets/images/e-commerce.jpeg";
import meetup from "../assets/images/meetup.jpeg";
import youtube from "../assets/images/youtube.jpeg";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const Projects = () => {
  return (
    <section id="projects">
      <Stack
        marginY={24}
        spacing={3}
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h3" marginY={2}>
          Projects
        </Typography>

        <Stack direction={{ xs: "column-reverse", md: "row" }} spacing={3}>
          <Stack padding={1} spacing={0.5}>
            <Typography variant="h6">E-commerce App</Typography>
            <Typography variant="subtitle1">
              Focus of this app is frontend functionality of e-commerce page
              with Redux-toolkit for state managment. I used the data from
              fake-store-api and is fully responsive.
            </Typography>
            <Typography variant="subtitle1">Tech used:</Typography>
            <Stack direction="row" gap={1} display="flex" flexWrap="wrap">
              <Paper>
                <Typography padding={1}>React</Typography>
              </Paper>
              <Paper>
                <Typography padding={1}>Redux</Typography>
              </Paper>
              <Paper>
                <Typography padding={1}>Typescript</Typography>
              </Paper>
              <Paper>
                <Typography padding={1}>react-router-dom</Typography>
              </Paper>
              <Paper>
                <Typography padding={1}>MaterialUI</Typography>
              </Paper>
            </Stack>
            <Stack direction="row" spacing={1} paddingTop={0.5}>
              <Button
                variant="contained"
                color="secondary"
                href="https://github.com/Vlado46/ecommerce-redux-ts"
                target="_blank"
              >
                <GitHubIcon />
                <Typography marginX={2}>Code</Typography>
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                href="https://6444617b2b67271c361e905f--charming-granita-5a0ae5.netlify.app/"
                target="_blank"
              >
                <OpenInNewIcon />
                <Typography marginX={2}>Live</Typography>
              </Button>
            </Stack>
          </Stack>
          <Paper>
            <img className="projects-img" src={eCommerce} />
          </Paper>
        </Stack>

        <Stack
          direction={{ xs: "column-reverse", md: "row" }}
          marginY={2}
          spacing={3}
        >
          <Stack padding={1} spacing={0.5}>
            <Typography variant="h6">Youtube App</Typography>
            <Typography variant="subtitle1">
              This app uses Youtube v3 from RapidAPI and is fully responsive.
              Searchbar query is 'New movie trailers' + user input and sidebar
              makes api request for the channels.
            </Typography>
            <Typography variant="subtitle1">Tech used:</Typography>
            <Stack direction="row" gap={1} display="flex" flexWrap="wrap">
              <Paper>
                <Typography padding={1}>React</Typography>
              </Paper>
              <Paper>
                <Typography padding={1}>Axios</Typography>
              </Paper>
              <Paper>
                <Typography padding={1}>RapidAPI</Typography>
              </Paper>
              <Paper>
                <Typography padding={1}>react-router-dom</Typography>
              </Paper>
              <Paper>
                <Typography padding={1}>MaterialUI</Typography>
              </Paper>
            </Stack>
            <Stack direction="row" spacing={1} paddingTop={0.5}>
              <Button
                variant="contained"
                color="secondary"
                href="https://github.com/Vlado46/youtube-movies-api-mui"
                target="_blank"
              >
                <GitHubIcon />
                <Typography marginX={2}>Code</Typography>
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                href="https://6431857fbb0fc93787036faa--amazing-chebakia-f2e6c0.netlify.app"
                target="_blank"
              >
                <OpenInNewIcon />
                <Typography marginX={2}>Live</Typography>
              </Button>
            </Stack>
          </Stack>
          <Paper>
            <img className="projects-img" src={youtube} />
          </Paper>
        </Stack>
        <Stack
          direction={{ xs: "column-reverse", md: "row" }}
          marginY={2}
          spacing={3}
        >
          <Stack padding={1} spacing={0.5}>
            <Typography variant="h6">Meetup Events App</Typography>
            <Typography variant="subtitle1">
              This app uses Firebase for user autorization and Firestore. For
              creating, deleting or edditing posts eather create new user or use
              email: dummymail@gmail.com pass: dummypass123
            </Typography>
            <Typography variant="subtitle1">Tech used:</Typography>
            <Stack direction="row" gap={1} display="flex" flexWrap="wrap">
              <Paper>
                <Typography padding={1}>React</Typography>
              </Paper>
              <Paper>
                <Typography padding={1}>Firebase</Typography>
              </Paper>
              <Paper>
                <Typography padding={1}>GoogleAuth</Typography>
              </Paper>
              <Paper>
                <Typography padding={1}>react-router-dom</Typography>
              </Paper>
              <Paper>
                <Typography padding={1}>MaterialUI</Typography>
              </Paper>
            </Stack>
            <Stack direction="row" spacing={1} paddingTop={0.5}>
              <Button
                variant="contained"
                color="secondary"
                href="https://github.com/Vlado46/meetup-events-react-mui"
                target="_blank"
              >
                <GitHubIcon />
                <Typography marginX={2}>Code</Typography>
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                href="https://6431eba654084910927a7dfd--stellar-baklava-5dc10f.netlify.app/"
                target="_blank"
              >
                <OpenInNewIcon />
                <Typography marginX={2}>Live</Typography>
              </Button>
            </Stack>
          </Stack>
          <Paper>
            <img className="projects-img" src={meetup} />
          </Paper>
        </Stack>
      </Stack>
    </section>
  );
};

export default Projects;
