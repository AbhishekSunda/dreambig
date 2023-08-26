"use client"
import React from "react";
import { BiPlayCircle } from "@react-icons/all-files/bi/BiPlayCircle"
import { RxEnter } from "react-icons/rx";
import { BsCurrencyRupee } from "react-icons/bs";
import { FaTrophy } from "@react-icons/all-files/fa/FaTrophy";
import { FaRunning } from "@react-icons/all-files/fa/FaRunning";
import { AiFillDownCircle } from '@react-icons/all-files/ai/AiFillDownCircle';
import Link from "next/link";

const EnterGame = () => {

    return <div className="flex flex-col gap-y-4">
        <Link href={"/game"} className="h-[200px] bg-amber-400 w-full rounded-3xl p-5 flex flex-col justify-between px-6 transition-all hover:rounded-[32px] shadow-md ">
            <div>
                <BiPlayCircle size={"4rem"} color="#24199e" />
            </div>
            <div className="flex items-center justify-between">
                <div className="flex flex-col justify-center pl-1">
                    <div className="text-2xl text-black font-semibold">Play</div>
                    <div className="text-2xl text-black font-semibold">Game</div>
                </div>
                <div>
                    <RxEnter size={"3rem"} color="#24199e" />
                </div>
            </div>
        </Link>
        <div className="w-full flex gap-x-4 flex-wrap ">
            <Link href={"/wallet"} className="h-[200px] bg-blue-700 flex-1 rounded-3xl px-6 flex flex-col justify-around transition-all hover:rounded-[32px] shadow-md">
                <div><BsCurrencyRupee size={"4rem"} color={"#fbbe24"} /></div>
                <div className="flex justify-between items-center flex-wrap">
                    <div className="text-2xl font-semibold text-white">Withdraw</div>
                    <div><AiFillDownCircle size={"4rem"} color={"#fbbe24"} /></div>
                </div>

            </Link>
            <Link href={"/history"} className="h-[200px] bg-green-500 flex-1 rounded-3xl px-6 flex flex-col justify-around transition-all hover:rounded-[32px] shadow-md">
                <div><FaTrophy size={"4rem"} color={"#1d4ed8"} /></div>
                <div className="flex justify-between items-center flex-wrap">
                    <div className="text-2xl font-semibold text-white">Winnings</div>
                    <div><FaRunning size={"4rem"} color={"#1d4ed8"} /></div>
                </div>
            </Link>
        </div>
    </div>


}
export default EnterGame;