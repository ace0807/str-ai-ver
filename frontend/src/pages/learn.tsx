import { TypingAnimation } from "../components/magicui/typing-animation";
import { ParallaxScroll } from "../components/ui/parallax-scroll";

export default function Learn() {
  const cards = [
    {
      title: "Arrays",
      description: "Linear data structure with index access.",
    },
    { title: "Trees", description: "Hierarchical structure for fast search." },
    { title: "Stacks", description: "LIFO structure used for backtracking." },
    { title: "Graphs", description: "Model of pairwise relationships." },
    { title: "Hashing", description: "Efficient key-value lookup technique." },
    { title: "DP", description: "Optimizing overlapping subproblems." },
    { title: "Queues", description: "FIFO structure for ordered processing." },
    { title: "Recursion", description: "Function calling itself." },
    { title: "Greedy", description: "Locally optimal = globally optimal." },
  ];
  return (
    <div>
      <h1 className="text-3xl font-bold m-0 p-0">
        <center>
          <TypingAnimation>Learn</TypingAnimation>
        </center>
      </h1>
      <div className="overflow-y-auto scrollbar-hidden w-full m-0 p-0">
        <ParallaxScroll topics={cards}></ParallaxScroll>
      </div>
    </div>
  );
}
