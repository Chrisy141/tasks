import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [questions, setType] = useState<QuestionType>(
        "short_answer_question",
    );
    function swapType(): void {
        setType((question) =>
            question === "short_answer_question" ?
                "multiple_choice_question"
            :   "short_answer_question",
        );
    }
    return (
        <div>
            <Button onClick={swapType}>Change Type</Button>
            {questions === "multiple_choice_question" ?
                <div>Multiple Choice</div>
            :   <div>Short Answer</div>}
        </div>
    );
}
