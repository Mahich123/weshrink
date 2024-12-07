"use client"

import { redirect } from "next/navigation"
import { useSession } from "../hooks/use-session"
import { Loader } from 'lucide-react'
import Header from "@/components/Header"


const DashBoardPage = () => {
    const { session, status, } = useSession()


    if (status === 'pending') {
        return (
            <div>
                <Loader />
            </div>
        )
    }


    if (!session?.user) {
        redirect('/')
        return null;
    }

    console.log("session", session)
    return (
        <div className="bg-[#020817]  min-h-screen" >
            <Header />
            {/* <div className="absolute w-80 h-64 md:w-[49%] md:h-[41%] lg:w-[47%] lg:h-[54%] xl:w-[38%] xl:h-[73%]  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-[#181E3D] to-[#232245] filter blur-2xl"></div> */}
            <p className="text-white mx-auto text-center">Dashboard</p>

        </div>


    )
}

export default DashBoardPage