import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<number>(0);

    const use = () => {
        setAttempts((newAttempt) => newAttempt - 1);
    };

    const gainAttempts = () => {
        setAttempts((newAttempt) => newAttempt + requestedAttempts);
    };

    function trueNumber(event: React.ChangeEvent<HTMLInputElement>) {
        setRequestedAttempts(parseInt(event.target.value) || 0); // Ensure it's a number
    }

    return (
        <div>
            <Form.Group controlId="giveAttempts">
                <Form.Label>Give Attempts</Form.Label>
                <Form.Control
                    type="number"
                    value={requestedAttempts}
                    onChange={trueNumber}
                />
            </Form.Group>
            <Button onClick={use} disabled={attempts === 0}>
                Use Attempt
            </Button>
            <Button onClick={gainAttempts}>Gain Attempt</Button>
            <div>Remaining attemps: {attempts}.</div>
        </div>
    );
}
