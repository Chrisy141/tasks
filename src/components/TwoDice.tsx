import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [leftDice, setLeftDice] = useState<number>(2);
    const [rightDice, setRightDice] = useState<number>(3);
    function changeLeftDice(): void {
        setLeftDice(d6());
    }
    function changeRightDice(): void {
        setRightDice(d6());
    }
    return (
        <span>
            <Button onClick={changeLeftDice}>Roll left dice</Button>
            <span data-testid="left-die">{leftDice}</span>
            <Button onClick={changeRightDice}>Roll right dice</Button>
            <span data-testid="right-die">{rightDice}</span>
            {leftDice === rightDice && leftDice === 1 ?
                <div>Lose</div>
            : leftDice === rightDice && leftDice !== 1 ?
                <div>Win</div>
            :   <div>Roll again</div>}
        </span>
    );
}
