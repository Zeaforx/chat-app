"use client";
import Signin from "@/components/signin";
import "tailwindcss/tailwind.css";
import { useState } from "react";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col ">
            <h1>FLEX</h1>
            <Signin />
        </main>
    );
}
