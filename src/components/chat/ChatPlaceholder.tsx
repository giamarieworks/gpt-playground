import React from "react";
import AddTokenModal from "./../auth/AddTokenModal";
import Link from "next/link";
import GithubStar from "./../misc/GithubStar";

type Props = {};

export default function ChatPlaceholder({}: Props) {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="max-w-3xl p-4 text-center text-primary">
        <h1 className="text-4xl font-medium">GPT Playground</h1>
        <p className="mt-4 text-lg">
          GPT playground enables you to test your prompts over multiple GPT models
        </p>
      </div>
    </div>
  );
}
