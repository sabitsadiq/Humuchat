"use client";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import JourneyBegines from "../components/JourneyBegines";
import MeetPartner from "../components/MeetPartner";
import WhyHumu from "../components/WhyHumu";
import ValidOption from "../components/ValidOption";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import { useState } from "react";
export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSide = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Head>
        <title>humuchat</title>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <Navbar toggleSide={toggleSide} />
      {/* <main> */}
      <SideBar isOpen={isOpen} toggleSide={toggleSide} />
      <Hero />
      <JourneyBegines />
      <MeetPartner />
      <WhyHumu />
      <ValidOption />
      {/* </main> */}
      <Footer />
    </div>
  );
}
