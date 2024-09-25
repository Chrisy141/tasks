import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript Chris Yanko Hello
                World
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <h1 style={{ backgroundColor: "blue" }}>New header for Website</h1>
            <div>
                <Container>
                    <Row>
                        <Col
                            style={{
                                height: 200,
                                width: 100,
                                backgroundColor: "red",
                            }}
                        >
                            <img
                                style={{ height: 200, width: 200 }}
                                src="https://40aprons.com/wp-content/uploads/2019/04/chimichurri-flank-steak-7.jpg"
                                alt="A delicious steak"
                            />
                        </Col>
                        <Col
                            style={{
                                height: 200,
                                width: 100,
                                backgroundColor: "red",
                            }}
                        >
                            <ul>
                                <li>Steak is awesome</li>
                                <li>Sushi is great</li>
                                <li>Burgers are nice</li>
                            </ul>
                        </Col>
                        <Col
                            style={{
                                height: 200,
                                width: 100,
                                backgroundColor: "red",
                            }}
                        >
                            <Button
                                onClick={() => {
                                    console.log("Hello World!");
                                }}
                            >
                                Log Hello World
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
            <hr></hr>
            <DoubleHalf></DoubleHalf>
            <hr></hr>
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            <ColoredBox></ColoredBox>
            <hr></hr>
            <ShoveBox></ShoveBox>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
        </div>
    );
}

export default App;
