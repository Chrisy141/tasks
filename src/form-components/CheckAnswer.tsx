import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }

    return (
        <div>
            <Form.Group controlId="MultipleChoiceQuestion">
                <Form.Label>What is your answer?</Form.Label>
                <Form.Control value={answer} onChange={updateAnswer} />
            </Form.Group>
            The selected answer is{" "}
            {answer === expectedAnswer ? answer + "✔️" : answer + "❌"}.
        </div>
    );
}
