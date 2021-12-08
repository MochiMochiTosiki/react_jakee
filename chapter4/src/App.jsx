import { useState } from "react";
import { ColoredMessage } from "./components/ColoredMessage";
import { CssModules } from "./components/CssModules";
import { StyledJsx } from "./components/StyledJsx";

export const App = () => {
    const [num, setNum] = useState(0);

    const onClickButton = () => {
        setNum(num + 1)
    };

    return (
    <>
        <h1 style={{ color: "red" }}>こんにちは！</h1>
        <ColoredMessage color="blue">お元気ですか?</ColoredMessage>
        <ColoredMessage color="pink">元気です</ColoredMessage>
        <button onClick={onClickButton}>ボタン</button>
        <p>{num}</p>
        <br></br>
        <CssModules />
        <br></br>
        <StyledJsx />
    </>
    );
};
