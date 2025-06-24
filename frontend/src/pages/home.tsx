"use client";

import { FlipWords } from "../components/ui/flip-words";
import { SparklesCore } from "../components/ui/sparkles";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";
import SplitText from "../components/ui/SplitText";

const content = [
  {
    title: "Guided Problem Solving with Hints",
    description:
      "Stuck on a coding question? Select Hint mode to get progressively easier clues that guide you toward the solution, without giving it away. This builds problem-solving skills step-by-step.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        <img
          src="https://t3.ftcdn.net/jpg/02/50/89/34/360_F_250893414_j5kUAv3cwq1moJ0z4M7QvX793Z2zhDgG.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },

  {
    title: "Mode-Switching for Adaptive Learning",
    description:
      "Straiver lets you choose your learning style. Switch between Hint, Debug, or Answer modes to match your confidence level. Chatbot responds differently based on your chosen approach, giving you full control over the depth and directness of the guidance you receive.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        <img
          src="https://pplx-res.cloudinary.com/image/upload/v1750710591/gpt4o_images/uvalbzhnt12ibq4t5n02.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "AI Integration for Smarter Responses",
    description:
      "Straiver is powered by Google’s Gemini AI. Whether you're requesting hints, debugging code, or asking for full answers, Gemini delivers highly accurate, context-aware responses. It doesn’t just respond, it understands your intent, adapts to your selected mode, and guides you like a real tutor would.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://imgs.search.brave.com/d5xDSwZsT-tXXfeuJZ3cU_HT2B9dqjEwt_AMLd2m9sY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90ZWNo/Y3J1bmNoLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyNS8w/My9HZXR0eUltYWdl/cy0yMTY5MzM5ODU0/LmpwZz93PTEwMjQ"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Learning Hub",
    description:
      "A dedicated Learn page where you’ll find beautifully crafted cards for every major data structure. Detailed explanations, intuitive visuals, and real-world use cases to help you master the concepts deeply and clearly. It's like flashcards, but smarter.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        <img
          src="https://pplx-res.cloudinary.com/image/upload/v1750764917/gpt4o_images/dlsyc48vw8imloztpdsb.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="learn"
        />
      </div>
    ),
  },
];

export default function Home() {
  const words = ["deeper", "smarter", "faster"];
  return (
    <div>
      <div className="h-[80vh] mt-[15vh]">
        <center className="text-2xl">
          Learn
          <FlipWords words={words} duration={1000} />
          with
        </center>
        <h1>
          <center>
            <SplitText
              text="STRAIVER"
              className="text-[7em] m-30px"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
            />
          </center>
        </h1>
        <div className="w-[40rem] h-40 relative m-auto overflow-hidden">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          <div className="[clip-path:ellipse(50%_30%_at_50%_0%)]">
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="w-full h-full"
              particleColor="#40e0d0"
            />
          </div>
        </div>
      </div>

      <div className="h-[100vh] w-full m-auto">
        <h1 className="text-5xl font-bold m-30px p-2">Features :</h1>
        <StickyScroll content={content} />
      </div>

      <div className="w-full h-[30vh]"></div>
    </div>
  );
}
