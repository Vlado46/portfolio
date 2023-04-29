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
                Last couple of years i dedicated my self on web development
                focusing on MERN stack. For now i am trying to perfect my
                frontend skills like HTML, CSS, Javascript, Typescript, React,
                React-native, MaterialUI and i have basic knowledge of Node.js,
                MongoDB, Next.js. I am self tought web developer and i am don't
                have previous work experiance but i am passionate in what i do
                and i confident i can fit in with team of more experianced
                developers that can halp me improve my skills.
              </Typography>
              <br />
              <Typography sx={{ typography: { xs: "body1", sm: "subtitle1" } }}>
                In my free time i like being outdore. I love coffe and
                occasional drink with friends. Staying in shape is important to
                me, so i try to spend some time working out every now and then.
                Good road trip is always welcom.
              </Typography>
            </Box>
          </Stack>
        </Paper>
      </Stack>
    </section>
  );
};

export default About;
