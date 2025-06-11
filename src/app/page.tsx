import Link from "next/link";
import { type Metadata } from "next";

import {
  ArrowUp,
  Code,
  Image,
  Microscope,
  Newspaper,
  Paperclip,
  User,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/icons/logo";
import { LogoWithName } from "@/components/icons/logo-with-name";

export const metadata: Metadata = {
  title: "Grok",
};

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 flex h-2/25 w-full items-center justify-between p-3 md:p-4">
      <Link href="/">
        <Logo />
      </Link>
      <div className="flex items-center gap-x-2.5">
        <Button
          asChild={true}
          size={"sm"}
          className="inline-flex items-center justify-center"
        >
          <Link href="/auth/sign-up">
            <User size={16} strokeWidth={1.75} />
            Sign up
          </Link>
        </Button>
        <Button variant="outline" asChild={true} size={"sm"}>
          <Link href="/auth/sign-in">Sign in</Link>
        </Button>
      </div>
    </nav>
  );
};

const PromptInput = () => {
  return (
    <div className="border-border mt-6 w-full rounded-3xl border p-3.5 shadow-sm">
      <textarea
        placeholder="What do you want to know?"
        className="w-full resize-none text-sm focus:outline-none"
      />
      <div className="flex items-center justify-between">
        <Button size="icon" variant="outline">
          <Paperclip
            strokeWidth={1.75}
            size={18}
            className="text-foreground-accent"
          />
        </Button>
        <div className="flex items-center justify-center gap-x-4">
          <p className="text-sm">Grok 3</p>
          <Button size="icon">
            <ArrowUp strokeWidth={1.75} size={24} />
          </Button>
        </div>
      </div>
    </div>
  );
};

const SamplePrompts = () => {
  const prompts = [
    {
      name: "Create Images",
      icon: Image,
    },
    {
      name: "News",
      icon: Newspaper,
    },
    {
      name: "Research",
      icon: Microscope,
    },
    {
      name: "Generate Code",
      icon: Code,
    },
  ];

  return (
    <div className="mt-3 flex items-center justify-center gap-x-2">
      {prompts.map(({ icon: Icon, name }) => (
        <Button key={name} className="gap-2 font-normal" variant="outline">
          {
            <Icon
              className="text-foreground-accent"
              strokeWidth={1.75}
              size={18}
            />
          }{" "}
          {name}
        </Button>
      ))}
    </div>
  );
};

const HomePage = () => {
  return (
    <div className="relative h-screen w-screen">
      <Navbar />
      <div className="h-full">
        <div className="mx-auto flex h-full w-9/10 max-w-[800px] flex-col items-center justify-center">
          <div className="flex w-full flex-col items-center justify-center">
            <LogoWithName />
            <PromptInput />
            <SamplePrompts />
          </div>
          <p className="text-foreground-accent mt-4 text-center text-xs leading-4 md:mt-4">
            By messaging Grok, you agree to our{" "}
            <span className="text-foreground font-medium">Terms</span> and{" "}
            <span className="text-foreground font-medium">Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
