import { auth } from "./fire";
import { useRef } from "react";

function ChatMessage(props) {
    const dummy = useRef();
    // const uid = props.id;
    // const text = props.text;

    const map = props.messages.map((message) => {
        // const scroll = dummy.current.scrollIntoView({ behavior: "smooth" });
        const uid = message.uid;
        const text = message.text;
        // const id = message.id;
        const key = message.createdAt;

        const messageClass =
            uid === auth.currentUser.uid ? "sent" : "received  text-black";
        return (
            <div className={`message ${messageClass}`} key={key}>
                <img src={props.pfp} />
                <p>{text}</p>
                {/* {scroll} */}

                {/* <li>{uid}</li> */}
            </div>
        );
    });

    return (
        // <div className="">
        //     <p>{text}</p>
        //     <p>{uid}</p>
        // </div>
        <main>
            {map}
            <div id="scrollTarget"></div>
            {/* <span ref={dummy}>ref={dummy}</span> */}
        </main>
    );
}

export default ChatMessage;
