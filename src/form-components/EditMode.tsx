import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [name, setName] = useState<string>("Your name");
    const [edit, setEdit] = useState<boolean>(false);
    const [student, setStudent] = useState<boolean>(true);

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="edit-mode-switch"
                checked={edit}
                onChange={() => {
                    setEdit(!edit);
                }}
            />
            {edit ?
                <div>
                    <Form.Group controlId="studentName">
                        <Form.Label>Student Name:</Form.Label>
                        <Form.Control
                            type="text"
                            value={name}
                            onChange={updateName}
                        />
                    </Form.Group>
                    <Form.Group controlId="studentCheckBox">
                        <Form.Check
                            type="checkbox"
                            label="Are you a student?"
                            checked={student}
                            onChange={updateStudent}
                        />
                    </Form.Group>
                </div>
            :   <div>
                    {name} {student ? "is a student" : "is not a student"}
                </div>
            }
        </div>
    );
}
