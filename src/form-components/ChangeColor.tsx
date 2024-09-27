import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const [color, setChangeColor] = useState<string>("red");

    function updateColors(event: React.ChangeEvent<HTMLInputElement>) {
        setChangeColor(event.target.value);
    }

    const colors = [
        { id: "red" },
        { id: "blue" },
        { id: "green" },
        { id: "orange" },
        { id: "purple" },
        { id: "yellow" },
        { id: "white" },
        { id: "black" },
    ];

    return (
        <div>
            {colors.map((colorList) => (
                <Form.Check
                    inline
                    key={colorList.id}
                    type="radio"
                    name="Colors"
                    onChange={updateColors}
                    id={`color-check-${colorList.id}`}
                    label={
                        <span
                            style={{
                                backgroundColor:
                                    color === colorList.id ?
                                        colorList.id
                                    :   "transparent",
                                color:
                                    (
                                        color === colorList.id &&
                                        colorList.id === "black"
                                    ) ?
                                        "white"
                                    :   "black",
                                padding: "1px 1px",
                            }}
                        >
                            {colorList.id}
                        </span>
                    }
                    value={colorList.id}
                    checked={color === colorList.id}
                />
            ))}

            <div>
                You have picked the color{" "}
                <span
                    data-testid="colored-box"
                    style={{
                        backgroundColor: color,
                        color: color === "black" ? "white" : "black",
                        padding: "1px 1px",
                    }}
                >
                    {color}
                </span>
            </div>
        </div>
    );
}
