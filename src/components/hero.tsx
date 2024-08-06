"use client";
import React from "react";
import { ContainerScroll } from "../components/ui/container-scroll-animation";
import Image from "next/image";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Welcome to Technova <br />
              <span className="text-xl md:text-[6rem] font-bold mt-1 leading-none">
                A 24-hour Hackathon
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/gaac-logo.png`}
          alt="hero"
          height={500}
          width={750}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
