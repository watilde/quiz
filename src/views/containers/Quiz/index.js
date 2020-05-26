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
import { useStore } from "state/configureStore";
import shuffle from "lodash.shuffle";
import { Redirect } from "react-router-dom";

function Quiz() {
  const { state } = useStore();
  const { questions } = state.quiz;
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const handleAnswer = (answer) => {
    if (questions[step].answer === answer) {
      setScore(score + 1);
    }
    setStep(step + 1);
  };

  if (isDone) {
    return <Redirect push to="/" />;
  }

  if (step === questions.length) {
    alert("Your score is " + score);
    setIsDone(true);
    return <></>;
  }

  return (
    <>
      <Container component="main" maxWidth="xs">
        <Grid container>
          <Grid item xs={12} sm={12}>
            Score: {score}
          </Grid>
          <Grid item xs={12} sm={6}>
            <img
              width="120"
              src={require(`../../assets/images/${questions[step].answer}.png`)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            {shuffle(questions[step].choices).map((item) => {
              return (
                <div>
                  <br />
                  <Button
                    onClick={() => {
                      handleAnswer(item);
                    }}
                    variant="contained"
                    color="primary"
                  >
                    {item}
                  </Button>
                  <br />
                </div>
              );
            })}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Quiz;
