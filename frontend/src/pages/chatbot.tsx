import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import { TypingAnimation } from "../components/magicui/typing-animation";
import { Button } from "../components/ui/stateful-button";
type Message = {
  sender: "user" | "bot";
  text: string;
};

export default function Chatbot() {
  const [input, setInput] = useState("");
  const [selectedMode, setSelectedMode] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      generateAnswer();
    }
  };

  function userText(): string {
    if (selectedMode === "Hint") {
      return (
        "Give me 3 consecutive hints progressively getting easier " + input
      );
    } else if (selectedMode === "Debug") {
      return "Debug my code " + input;
    } else if (selectedMode == "Answer") {
      return "Give me the final answer for " + input;
    } else {
      return input;
    }
  }

  async function generateAnswer() {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { sender: "user", text: input }]);
    setInput("");
    console.log("loading...");

    const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

    try {
      const response = await axios({
        headers: {
          "Content-Type": "application/json",
        },

        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
        method: "post",
        data: {
          contents: [{ parts: [{ text: userText() }] }],
        },
      });

      let botResponse =
        response["data"]["candidates"][0]["content"]["parts"][0]["text"];
      console.log(botResponse);
      setMessages((prev) => [...prev, { sender: "bot", text: botResponse }]);
    } catch (err) {
      setMessages((prev) => [...prev, { sender: "bot", text: "Error❌" }]);
    }
  }

  return (
    <div className="overflow-y-clip">
      <h1 className="text-3xl font-bold">
        <center>
          <TypingAnimation>Chatbot🤖</TypingAnimation>
        </center>
      </h1>

      <div className="w-[70vw] h-[70vh] bg-neutral-800 m-auto rounded-2xl flex flex-col">
        <div className="w-full flex-1 p-2 flex flex-col overflow-x-hidden overflow-y-auto scrollbar-hidden">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              } w-full`}
            >
              <div
                className={`${
                  msg.sender === "user" ? "bg-blue-500" : "bg-neutral-700"
                } max-w-[60%] rounded-2xl p-2 m-2 text-white break-words whitespace-pre-wrap`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 p-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="px-4 py-2 rounded-2xl bg-neutral-700 text-white border border-gray-500 focus:outline-none flex items-center gap-1">
                {selectedMode ? selectedMode : "Mode"} <ChevronDown size={16} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="bg-neutral-800 text-white rounded-md shadow-md border border-gray-600"
            >
              {["Default", "Hint", "Debug", "Answer"].map((mode) => (
                <DropdownMenuItem
                  key={mode}
                  className="px-3 py-1 hover:bg-neutral-700 cursor-pointer"
                  onSelect={() => setSelectedMode(mode)}
                >
                  {mode}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <input
            className="flex-1 p-2 rounded-2xl bg-neutral-700 text-white border border-gray-500 focus:outline-none"
            placeholder="Ask anything..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />

          <Button
            className="px-4 py-2 rounded-2xl bg-neutral-700 text-white border border-gray-500 focus:outline-none"
            onClick={generateAnswer}
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  );
}
