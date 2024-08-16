"use client";

import { ReactButton } from "test-ui/lib/Button/TButton";

export default function Home() {
  // console.log(TButton());

  return (
    <main>
      <div>hallo,world</div>
      <div className="hallo">
        <div className="bg-red-200 w-60 h-60">123123</div>
        {/* <TButton></TButton> */}
        <ReactButton msg="垃圾Omi" class="bg-red-600 w-60 h-60 block">
          <div>123123123</div>
          <div>hallo,world</div>
        </ReactButton>
      </div>
    </main>
  );
}
