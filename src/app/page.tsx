"use client"

import { useState } from "react"

import TextArea from "@/components/textarea";
import { ArrowLeftRightIcon } from "lucide-react";

export default function Home() {
  const [decimal, setDecimal] = useState(String())
  const [binary, setBinary] = useState(String())
  const [option, setOption] = useState<"decimal"|"binary">("decimal")

  return (
    <main className="flex flex-col items-center px-[1rem] md:px-[4rem]">
      <div className="flex w-full justify-between items-center py-[.8rem] gap-[1rem] xl:gap-[2rem] text-lg text-zinc-400">
        <p className="w-full">{option == "decimal" ? "Decimal" : "binary" && "Binário"}</p>
        <button 
          onClick={() => setOption(state => state == "decimal" ? "binary" : "decimal")} 
          className="flex items-center gap-[.5rem] p-[.5rem] rounded-lg"
        >
          <ArrowLeftRightIcon strokeWidth={1} className="transition-all hover:text-zinc-600"/>
        </button>
        <p className="w-full text-right xl:text-left">{option == "decimal" ? "Binário" : "binary" && "Decimal"}</p>
      </div>
      <div className="w-full flex flex-col xl:flex-row justify-center items-center gap-[1rem] xl:gap-[2rem]">
        <TextArea
          type={option}
          setBinary={setBinary}
          setDecimal={setDecimal}
          value={option == "decimal" ? decimal : "binary" && binary}
        />
        <button className="hidden xl:flex invisible items-center gap-[.5rem] p-[.5rem] rounded-lg">
          <ArrowLeftRightIcon strokeWidth={1} className="transition-all hover:text-zinc-600"/>
        </button>
        <TextArea
          type={option == "decimal" ? "binary" : "binary" && "decimal"}
          setBinary={setBinary}
          setDecimal={setDecimal}
          value={option == "decimal" ? binary : "binary" && decimal}
          disabled
        />
      </div>
    </main>
  )
}
