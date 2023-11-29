import { db } from "./fire";
import { serverTimestamp, addDoc, collection } from "firebase/firestore";
import React from "react";

function ChatInput(props) {
    const [form, setForm] = React.useState({
        text: "",
    });

    function handleChange(event) {
        setForm((prevform) => {
            return {
                ...prevform,
                [event.target.name]: event.target.value,
            };
        });
    }

    async function handleSubmit(event) {
        try {
            event.preventDefault();

            await addDoc(collection(db, "messages"), {
                text: form.text,
                createdAt: serverTimestamp(),
                uid: props.uid,
                photoURL: props.photoURL,
            });

            setForm((texts) => ({
                ...texts,
                text: "",
            }));
        } catch {
            localStorage.clear();
            window.location.reload();
        }
        // dummy.current.scrollIntoView({ behavior: "smooth" });
    }

    function scroll(params) {
        const target = document.getElementById("scrollTarget");
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="text"
                value={form.text}
                onChange={handleChange}
                placeholder="say something nice"
            />{" "}
            ;
            <button type="submit" onClick={scroll}>
                🕊️
            </button>
        </form>
    );
}

export default ChatInput;
// onClick={handleClick}
