import React, { useState } from "react";
import { Button } from "react-bootstrap";

type holiday = "💖" | "🎆" | "🎃" | "🦃" | "🎄";

export function CycleHoliday(): React.JSX.Element {
    const [currHoliday, setHoliday] = useState<holiday>("💖");

    function changeHolidayByYear(): void {
        setHoliday(
            currHoliday === "💖" ? "🎆"
            : currHoliday === "🎆" ? "🎃"
            : currHoliday === "🎃" ? "🦃"
            : currHoliday === "🦃" ? "🎄"
            : "💖",
        );
    }
    function changeHolidayByAlphabet(): void {
        setHoliday(
            currHoliday === "🎄" ? "🎆"
            : currHoliday === "🎆" ? "🎃"
            : currHoliday === "🎃" ? "🦃"
            : currHoliday === "🦃" ? "💖"
            : "🎄",
        );
    }
    return (
        <div>
            <Button onClick={changeHolidayByYear}>Cycle by Year</Button>
            <Button onClick={changeHolidayByAlphabet}>Cycle by Alphabet</Button>
            <div>Current holiday: {currHoliday}.</div>
        </div>
    );
}
