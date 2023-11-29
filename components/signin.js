"use client";
import { useState } from "react";
import { createUserWithEmailAndPassword, setPersistence } from "firebase/auth";
import { auth } from "./fire";

function Signin() {
    const [value, setValue] = useState("");
    const [form, setForm] = useState({
        password: "",
        email: "",
    });

    function handleChange(event) {
        setForm((prevform) => {
            return {
                ...prevform,
                [event.target.name]: event.target.value,
            };
        });
    }

    function handleSubmit(event) {
        event.preventDefault();

        credential();
    }

    function credential() {
        createUserWithEmailAndPassword(auth, form.email, form.password)
            .then((userCredential) => {
                // Signed up
                const user = userCredential.user;
                setValue(user);

                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error);
                // ..
            });
    }
    return (
        <div>
            {value ? (
                <h1>signed in</h1>
            ) : (
                <form
                    onSubmit={handleSubmit}
                    className="bg-green shadow-md rounded"
                >
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700"
                    >
                        signin
                    </button>
                    <div className="bg-gray">
                        <label htmlFor="email">email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="bg-red">
                        <label htmlFor="password">passwoed</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                        />
                    </div>
                </form>
            )}
        </div>
    );
}

export default Signin;
