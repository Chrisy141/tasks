import React, { useState } from "react";
import { Button } from "react-bootstrap";

type holiday = "💖" | "🎆" | "🎃" | "🦃" | "🎄";

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHolidayYear] = useState<holiday>("💖");
    const [holiday2, setHolidayAlphabet] = useState<holiday>("💖");

    function changeHolidayByYear(): void {
        setHolidayYear(
            holiday === "💖" ? "🎆"
            : holiday === "🎆" ? "🎃"
            : holiday === "🎃" ? "🦃"
            : holiday === "🦃" ? "🎄"
            : "💖",
        );
    }
    function changeHolidayByAlphabet(): void {
        setHolidayAlphabet(
            holiday2 === "🎄" ? "🎆"
            : holiday2 === "🎆" ? "🎃"
            : holiday2 === "🎃" ? "🦃"
            : holiday2 === "🦃" ? "💖"
            : "🎄",
        );
    }
    return (
        <div>
            <Button onClick={changeHolidayByYear}>Cycle by Year</Button>
            {holiday}.
            <Button onClick={changeHolidayByAlphabet}>Cycle by Alphabet</Button>
            {holiday2}.
        </div>
    );
}
