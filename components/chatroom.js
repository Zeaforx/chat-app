// "use client";
import { initializeApp } from "firebase/app";
import {
    collection,
    doc,
    getDocs,
    orderBy,
    query,
    onSnapshot,
    limit,
} from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { db, auth } from "./fire";
import ChatMessage from "./chatMessage";
import ChatInput from "./chatInput";
import { useCollectionData } from "react-firebase-hooks/firestore";

function ChatRoom(props) {
    const [values, setvalues] = useState([]);

    const q = query(
        collection(db, "messages"),
        orderBy("createdAt", "desc"),
        limit(25)
    );
    const colref = collection(db, "messages");

    const [data, loading, error] = useCollectionData(q);
    if (loading) {
        return <div className="loader"></div>;
    }
    if (error) {
        return <h1>{error.message}</h1>;
    }

    return (
        <div>
            {/* <div>
                {values ? (
                    <h1>nothing</h1>
                ) : (
                    <>
                        <ChatMessage messages={values} />
                    </>
                )}
            </div> */}
            <ChatMessage
                messages={data.reverse()}
                pfp={props.pfp}
            ></ChatMessage>
        </div>
    );
}

export default ChatRoom;
