import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Chatbot from "./pages/chatbot";
import Learn from "./pages/learn";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { ModeToggle } from "./components/mode-toggle";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <nav className="w-full bg-gradient-to-t from-amber-300 to-amber-400 text-black flex justify-evenly p-1 items-center fixed z-49">
          <Link to="/">Home</Link>
          <Link to="/learn">Learn</Link>
          <Link to="/chatbot">Chatbot</Link>
          <ModeToggle />
        </nav>

        <header className="flex justify-end p-2">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </header>

        <div className="p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chatbot" element={<Chatbot />} />
            <Route path="/learn" element={<Learn />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
