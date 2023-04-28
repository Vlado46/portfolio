import { Button, Paper, Stack, TextField, Typography } from "@mui/material";
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import EmailIcon from "@mui/icons-material/Email";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ivhdhqj",
        "template_ijc8uyj",
        form.current,
        "Ug3lHJeGV7ao6g9tD"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    alert("message send!");
  };

  return (
    <section id="contact">
      <Stack spacing={3} justifyContent="center" alignItems="center">
        <Typography variant="h3" marginY={3}>
          Contact me
        </Typography>
        <Paper>
          <Stack direction="row" spacing={3}>
            <Stack
              component="form"
              ref={form}
              onSubmit={sendEmail}
              width={{ xs: "93%", md: "55vw" }}
              sx={{
                "& .MuiTextField-root": { m: 2, width: "96%" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                fullWidth
                color="secondary"
                label="Your Name"
                name="name"
              />
              <TextField
                fullWidth
                color="secondary"
                label="Your Email"
                name="email"
              />
              <TextField
                label="Message"
                color="secondary"
                multiline
                maxRows={4}
                name="message"
              />
              <Button
                variant="contained"
                color="secondary"
                type="submit"
                sx={{ m: 2, width: { xs: 280, md: 150 } }}
              >
                <EmailIcon />
                <Typography marginX={4}>Send</Typography>
              </Button>
            </Stack>
          </Stack>
        </Paper>
      </Stack>
    </section>
  );
};

export default Contact;
