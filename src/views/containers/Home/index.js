import React, { useState } from "react";
import {
  Button,
  Typography,
  Box,
  Grid,
  Select,
  MenuItem,
  Container,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Redirect } from "react-router-dom";

function Home() {
  const [isEnter, setIsEnter] = useState("");
  const handleEnter = () => {
    setIsEnter(true);
  };

  if (isEnter) {
    return <Redirect push to="/quiz" />;
  }

  return (
    <>
      <Container component="main" maxWidth="xs">
        <div>
          <Grid
            container
            alignContent="center"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12}>
              <Typography component="h1" variant="h5">
                Try Quiz
              </Typography>
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleEnter}
          >
            Enter
          </Button>
        </div>
      </Container>
    </>
  );
}

export default Home;
