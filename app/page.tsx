"use client";

import { useState } from "react";
import Image from "next/image";
import Aurora from "./components/aurora";
import Container from "./components/layout/container";

export default function Home() {
  return (
    <Container>
      <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />
    </Container>
  );
}
