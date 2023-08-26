import React from "react";
import MenuDropdown from "@/Components/menu/menu";
import Link from "next/link";

const Header = () => {
    return <header className="h-24 w-full border border-slate-200">
        <div className="max-w-4xl px-2 flex justify-between mx-auto items-center h-full">
            <Link href={"/"} className="pl-1 flex text-2xl font-bold tracking-wide">
                <div className="text-[#24199e]">Dream</div>
                <div className="text-green-500">Big</div>
            </Link>
            <MenuDropdown />
        </div>
    </header>
}

export default Header;