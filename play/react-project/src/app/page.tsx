"use client";

import { RYButton } from "test-ui";

export default function Home() {
  return (
    <main>
      <div>hallo,world</div>
      <div className="hallo">
        <div className="bg-red-200 w-60 h-60">333</div>
        <RYButton class="w-60 bg-red-700 h-60 block" msg="12">
          12
        </RYButton>
      </div>
    </main>
  );
}
