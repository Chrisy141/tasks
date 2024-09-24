import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);

    const quizStart = () => {
        setProgress(true);
        setAttempts((prevAttempts) => prevAttempts - 1);
    };
    const stopQuiz = () => {
        setProgress(false);
    };
    const mulligan = () => {
        setAttempts((prevAttempts) => prevAttempts + 1);
    };
    return (
        <div>
            <Button onClick={quizStart} disabled={progress || attempts === 0}>
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!progress}>
                Stop Quiz
            </Button>
            <Button onClick={mulligan} disabled={progress}>
                Mulligan
            </Button>
            <p>Attempts remaining: {attempts}</p>
            <p>Quiz in progress: {progress ? "yes" : "No"}</p>
        </div>
    );
}
