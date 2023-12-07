import Link from "next/link";

export default function Footer(){
    return(
        <footer className="flex justify-center text-[.8rem] border-t-[2px] border-zinc-100 text-zinc-700 m-[1.2rem] p-[1.2rem]">
            <p className="font-semibold">Desenvolvido por <Link href={"https://www.instagram.com/joao.mjf/"} className="font-normal"><u>@joao.mjf</u></Link></p>
        </footer>
    )
}