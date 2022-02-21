import React from "react";
import dynamic from "next/dynamic";

const FirstPost = dynamic(() => import('./posts/FirstPost'), {ssr:false})
debugger;
export default function index() {
  return <FirstPost suppressHydrationWarning/>
}