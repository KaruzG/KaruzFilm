import { jacquard24 } from "@/fonts/fonts";

const Nav = () => {
  return (
    <nav className={jacquard24.className + " flex flex-row align-middle justify-between py-3 px-[15%] underline-after"}>
        <h3 className={jacquard24.className + " text-4xl tracking-widest"}>karuz</h3>
        <div className="flex flex-row gap-15 text-3xl">
            <button>collections</button>
            <button>all</button>
        </div>
    </nav>
  )
};

export default Nav;
