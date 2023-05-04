import { Box, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import img from "../assets/mern-stack2.png";

const About = () => {
  return (
    <section id="about">
      <Stack
        spacing={3}
        paddingY={{ lg: 8 }}
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h3" marginY={3}>
          About me
        </Typography>
        <Paper>
          <Stack direction={{ md: "row" }} spacing={3}>
            <img className="about-img" src={img} />
            <Box padding={3}>
              <Typography sx={{ typography: { xs: "body1", sm: "subtitle1" } }}>
                For the last few years, I have been dedicated my self on web
                development focusing on MERN stack. Right now I am trying to
                perfect my front-end skills such as HTML, CSS, Javascript,
                Typescript, React, React-native, MaterialUI and have basic
                knowledge of Node.js, MongoDB, Next.js. I am a self-tought web
                developer and have no previous work experiance, but I am
                passionate about what I do and I am confident I can fit into a
                team of more experianced developers who can halp me improve my
                skills.
              </Typography>
              <br />
              <Typography sx={{ typography: { xs: "body1", sm: "subtitle1" } }}>
                In my free time I enjoy being outdoors. I love coffee and
                occasional drink with friends. It's important to me to stay in
                shape, so I try to spend some time working out every now and
                then. A good road trip is always welcome.
              </Typography>
            </Box>
          </Stack>
        </Paper>
      </Stack>
    </section>
  );
};

export default About;
