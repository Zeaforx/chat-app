"use client";
import React from "react";
// import GithubIcon from "../../../public/github-icon.svg";
// import "/prop.jpg from" "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { GiftIcon, LinkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { useState } from "react";

const firebaseConfig = {
    apiKey: "AIzaSyB2jyS_DIpQO2eQ_9qNaoYXJOc-1Y0mwgk",
    authDomain: "kaexponent.firebaseapp.com",
    databaseURL: "https://kaexponent-default-rtdb.firebaseio.com",
    projectId: "kaexponent",
    storageBucket: "kaexponent.appspot.com",
    messagingSenderId: "168252267431",
    appId: "1:168252267431:web:a06d58d13281d7ff177482",
    measurementId: "G-6X8YJFJGDH",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const EmailSection = () => {
    const [form, setForm] = useState({
        email: "",
        message: "",
        subject: "",
    });

    function handleChange(event) {
        setForm((prevform) => {
            return {
                ...prevform,
                [event.target.name]: event.target.value,
            };
        });
        console.log(event.target.value);
    }

    async function handleSubmit(event) {
        event.preventDefault();

        await setDoc(doc(db, "DigitalHubContactForm", form.email), {
            // name: form.name,
            email: form.email,
            message: form.message,
            inquiry: form.inquiry,
        });
    }
    return (
        <section
            id="contact"
            className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
        >
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
            <div className="z-10">
                <h5 className="text-xl font-bold text-white my-2">
                    Let`&apos;s Meet
                </h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md">
                    {" "}
                    W&apos;e are currently looking for new opportunities, our
                    inbox are always open. We&apos;ll try my best to get back to
                    you!
                </p>
                <div className="socials flex flex-row gap-2">
                    <Link href="github.com">
                        {/* <Image src={GiftIcon} alt="Github Icon" /> */}
                        <GiftIcon></GiftIcon>
                    </Link>
                    <Link href="linkedin.com">
                        {/* <Image src={LinkIcon} width={100} alt="Linkedin Icon" /> */}
                        <LinkIcon></LinkIcon>
                    </Link>
                </div>
            </div>
            <div className="z-10">
                <form className="flex flex-col" onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label
                            htmlFor="email"
                            className="text-white block mb-2 text-sm font-medium"
                        >
                            Your email
                        </label>
                        <input
                            onChange={handleChange}
                            value={form.email}
                            name="email"
                            type="email"
                            id="email"
                            required
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="jacob@google.com"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="subject"
                            className="text-white block text-sm mb-2 font-medium"
                        >
                            Subject
                        </label>
                        <input
                            onChange={handleChange}
                            value={form.subject}
                            type="text"
                            id="subject"
                            required
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="Just saying hi"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="message"
                            className="text-white block text-sm mb-2 font-medium"
                        >
                            Message
                        </label>
                        <textarea
                            onChange={handleChange}
                            value={form.message}
                            name="message"
                            id="message"
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="Let's talk about..."
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default EmailSection;
