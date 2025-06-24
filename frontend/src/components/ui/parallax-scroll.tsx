"use client";
import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";

const bgColors = [
  "bg-pink-100",
  "bg-purple-100",
  "bg-blue-100",
  "bg-green-100",
  "bg-yellow-100",
  "bg-rose-100",
  "bg-teal-100",
  "bg-indigo-100",
  "bg-orange-100",
  "bg-fuchsia-100",
];

export const ParallaxScroll = ({
  topics,
  className,
}: {
  topics: { title: string; description: string }[];
  className?: string;
}) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(topics.length / 3);
  const firstPart = topics.slice(0, third);
  const secondPart = topics.slice(third, 2 * third);
  const thirdPart = topics.slice(2 * third);

  return (
    <div
      className={cn(
        "h-[40rem] items-start overflow-y-auto scrollbar-hidden w-full",
        className
      )}
      ref={gridRef}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-40 px-10">
        {[firstPart, secondPart, thirdPart].map((group, colIdx) => {
          const translate =
            colIdx === 0
              ? translateFirst
              : colIdx === 1
              ? translateSecond
              : translateThird;

          return (
            <div className="grid gap-10 m-0 p-0" key={`col-${colIdx}`}>
              {group.map((topicObj, idx) => (
                <motion.div
                  style={{ y: translate }}
                  key={`card-${colIdx}-${idx}`}
                >
                  <div
                    className={cn(
                      "h-80 w-full rounded-lg shadow-xl flex flex-col items-center justify-center text-black text-center p-6 transition-all duration-300",
                      "hover:scale-[1.03] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-current",
                      bgColors[(colIdx * third + idx) % bgColors.length]
                    )}
                  >
                    <h3 className="text-2xl font-semibold mb-2">
                      {topicObj.title}
                    </h3>
                    <p className="text-sm opacity-80">{topicObj.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};
