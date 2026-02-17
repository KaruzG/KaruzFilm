import { jacquard24 } from "@/fonts/fonts";
import Link from "next/link";

const Footer = () => {
    return (
        <footer>
            <div className={`${jacquard24.className} text-2xl flex flex-col w-full justify-center items-center mt-20 pb-5 pt-2 mb-5 underline-before underline-after`}>
                <h4 className={`text-3xl text-background-100`}>Contact</h4>
                <Link className="underline" target="_blank" href={"mailto:josemiguelcpcs@gmail.com"}>mail</Link>
                <Link className="underline" target="_blank" href={"https://github.com/KaruzG"}>github</Link>
            </div>
            <p className={`${jacquard24.className} text-background-100 text-2xl mb-3 text-center`}>Copyright © 2025 Karuz</p>
        </footer>
    )
}

export default Footer;