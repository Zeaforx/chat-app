"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li> </li>
                <li>Website Design</li>
                <li>Sound Engineers</li>
                <li>Drone Operators</li>
                <li>Robotic Engineers</li>
                <li>Weapon Smiths</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>Fullstack Academy of Code</li>
                <li>University of California, Santa Cruz</li>
            </ul>
        ),
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="list-disc pl-2">
                <li>AWS Cloud Practitioner</li>
                <li>Google Professional Cloud Developer</li>
            </ul>
        ),
    },
];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className="text-white" id="about">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image src="/archimugun.jpg" width={500} height={500} />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        About Us
                    </h2>
                    <p className="text-base lg:text-lg">
                        Welcome to AFIT Digital Hub, where innovation meets
                        excellence in the world of technology. We are a
                        forward-thinking tech company dedicated to pushing the
                        boundaries of what is possible in the digital age. Our
                        mission is to empower individuals and businesses with
                        cutting-edge solutions that drive progress and simplify
                        complexity. Founded in [Year], AFIT Digital Hub has
                        evolved into a dynamic force in the tech industry. Our
                        journey began with a small team of passionate
                        technologists, and today, we have grown into a diverse
                        and talented family of professionals who share a common
                        vision: to make technology work seamlessly for you. What
                        sets us apart is our unwavering commitment to
                        innovation. We thrive on the challenges that come with
                        the ever-changing tech landscape, and we're always on
                        the lookout for the next big thing. Our team of experts
                        stays at the forefront of emerging technologies,
                        ensuring that we provide you with the most up-to-date
                        solutions that can drive your success.
                    </p>
                    {/* <div className="flex flex-row justify-start mt-8">
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}
                        >
                            {" "}
                            Skills{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("education")}
                            active={tab === "education"}
                        >
                            {" "}
                            Education{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("certifications")}
                            active={tab === "certifications"}
                        >
                            {" "}
                            Certifications{" "}
                        </TabButton>
                    </div>
                    <div className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
