import { auth } from "./fire";
import { useRef } from "react";

function ChatMessage(props) {
    const dummy = useRef();

    const map = props.messages.map((message) => {
        const uid = message.uid;
        const text = message.text;
        const key = message.createdAt;

        const messageClass =
            uid === auth.currentUser.uid ? "sent" : "received  text-black";
        return (
            <div className={`message ${messageClass}`} key={key}>
                <img src={message.photoURL} />
                <p>{text}</p>
            </div>
        );
    });

    return (
        <main>
            {map}
            <div id="scrollTarget"></div>
        </main>
    );
}

export default ChatMessage;
