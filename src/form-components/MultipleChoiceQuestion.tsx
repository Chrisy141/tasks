import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>(options[0]);

    function updateAnswer(event: React.ChangeEvent<HTMLSelectElement>) {
        setAnswer(event.target.value);
    }

    return (
        <div>
            <Form.Group controlId="MultipleChoiceQuestion">
                <Form.Label>What is your answer?</Form.Label>
                <Form.Select value={answer} onChange={updateAnswer}>
                    {options.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            The selected answer is{" "}
            {answer === expectedAnswer ? answer + "✔️" : answer + "❌"}.
        </div>
    );
}
