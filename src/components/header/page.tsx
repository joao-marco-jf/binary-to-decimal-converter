"use client"

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Header(){
    const [isOpen, setOpen] =  useState(false)

    return(
        <header className="flex justify-between p-[1rem] md:px-[4rem] border-b-[1px] border-zinc-200">
            <Link href={"/"}><h1 className="text-lg font-bold">B2D<span className="font-normal">Converter</span></h1></Link>
            {isOpen &&
                <menu className={"absolute z-50 flex flex-col gap-[1rem] py-[1rem] px-[1rem] md:px-[4rem] border-l-[1px] border-zinc-200 h-full w-[70%] md:w-[20%] bg-white top-0 right-0 md:text-lg"}>
                    <div className="w-full flex flex-row-reverse"><button onClick={() => setOpen(state => !state)}><X /></button></div>
                    <Link onClick={() => setOpen(state => !state)} href={"/"}>Início</Link>
                    <Link onClick={() => setOpen(state => !state)} href={"/how-it-works"}>Sobre a aplicação</Link>
                    <Link onClick={() => setOpen(state => !state)} href={"/about-the-developer"}>Sobre o desenvolvedor</Link>
                </menu>
            }
            <button onClick={() => setOpen(state => !state)}>
                <Menu />
            </button>
        </header>   
    )
}