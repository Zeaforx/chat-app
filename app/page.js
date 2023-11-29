"use client";

import { auth, provider } from "@/components/fire";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import ChatRoom from "@/components/chatroom";
import ChatInput from "@/components/chatInput";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Home() {
    const [value, setValue] = useState();
    const [uid, setUid] = useState();

    const [user] = useAuthState(auth);

    // const handleSignIn = () => {
    //     setPersistence(auth, browserSessionPersistence)
    //         .then(() => {
    //             // Existing and future Auth states are now persisted in the current
    //             // session only. Closing the window would clear any existing state even
    //             // if a user forgets to sign out.
    //             // ...
    //             // New sign-in will be persisted with session persistence.

    //         })
    //         .catch((error) => {
    //             // Handle Errors here.
    //             const errorCode = error.code;
    //             const errorMessage = error.message;
    //         });
    // };

    // function LogOut() {
    //     const handleClick = () => {
    //         localStorage.clear();
    //         window.location.reload();
    //         signOut(auth)
    //             .then(() => {
    //                 localStorage.clear();
    //                 window.location.reload();
    //             })
    //             .catch((error) => {});
    //     };
    //     return <button onClick={handleClick}>logout</button>;
    // }

    // function SignIn() {
    //     const handleClick = () => {
    //         signInWithPopup(auth, provider)
    //             .then((result) => {
    //                 // This gives you a Google Access Token. You can use it to access the Google API.
    //                 const credential =
    //                     GoogleAuthProvider.credentialFromResult(result);
    //                 const token = credential.accessToken;
    //                 // The signed-in user info.
    //                 const user = result.user;
    //                 setValue(user);
    //                 localStorage.setItem("user", user);
    //                 console.log(user);

    //                 // setUid(user.uid);
    //                 // IdP data available using getAdditionalUserInfo(result)
    //                 // ...
    //             })
    //             .catch((error) => {
    //                 // Handle Errors here.
    //                 const errorCode = error.code;
    //                 const errorMessage = error.message;
    //                 // The email of the user's account used.
    //                 // const email = error.customData.email;
    //                 // The AuthCredential type that was used.
    //                 const credential =
    //                     GoogleAuthProvider.credentialFromError(error);
    //                 // ...
    //             });
    //     };
    //     useEffect(() => {
    //         setValue(localStorage.getItem("user"));
    //     });
    //     return <button onClick={handleClick}>sign in</button>;
    // }

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
                        <ChatInput uid={user.uid}></ChatInput>
                        <ChatRoom pfp={user.photoURL}></ChatRoom>
                    </>
                ) : (
                    <SignIn></SignIn>
                )}
            </section>
        </div>
    );
}
