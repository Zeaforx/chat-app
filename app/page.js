"use client";

import { auth, provider } from "@/components/fire";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import ChatRoom from "@/components/chatroom";
import ChatInput from "@/components/chatInput";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Home() {
    const [user] = useAuthState(auth);

    function SignIn() {
        const signInWithGoogle = () => {
            signInWithPopup(auth, provider);
        };
        return (
            <>
                <button className="sign-in" onClick={signInWithGoogle}>
                    Sign in with Google
                </button>
                <p>
                    Do not violate the community guidelines or you will be
                    banned for life!
                </p>
            </>
        );
    }
    function LogOut() {
        const logOut = () => {
            signOut(auth);
        };
        return (
            <button className="sign-out" onClick={logOut}>
                Sign Out
            </button>
        );
    }

    return (
        <div className="App ">
            <header className="">
                <h1>⚛️🔥💬</h1>

                <LogOut></LogOut>
            </header>
            <section>
                {user ? (
                    <>
                        <ChatInput
                            uid={user.uid}
                            photoURL={user.photoURL}
                        ></ChatInput>
                        <ChatRoom photoURL={user.photoURL}></ChatRoom>
                    </>
                ) : (
                    <SignIn></SignIn>
                )}
            </section>
        </div>
    );
}
