"use client"

import { redirect } from "next/navigation"
import { useSession } from "../hooks/use-session"
import { Loader } from 'lucide-react'
import Header from "@/components/Header"
import CreateUrlForm from "@/components/CeateUrlForm"


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
        <div className="bg-gradient-radial from-[#4E4E55] to-[#151A36] min-h-screen" >
            <Header />
            <CreateUrlForm />

        </div>


    )
}

export default DashBoardPage