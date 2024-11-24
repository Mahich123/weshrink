"use client"

import { Features } from "@/components/Features"
import { Header } from "@/components/Header"
import { Button } from "@/components/ui/button"

const HomePage = () => {
    return (
        <div className="bg-[#020817]  min-h-screen ">
            <Header />
            <div className="absolute w-80 h-64 md:w-[49%] md:h-[41%] lg:w-[47%] lg:h-[54%] xl:w-[38%] xl:h-[73%]  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-[#181E3D] to-[#232245] filter blur-2xl"></div>
            <div className='mt-32 md:mt-8 2xl:mt-12'>
                <h1 className='relative text-[24px] md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[3.7rem] 2xl:leading-4  font-Nunito h-[90%] max-w-4xl flex items-center justify-center text-white mx-auto gap-x-1 md:gap-x-4 font-bold'>Smart <span className='font-normal'>Way</span> <span className='font-normal'>To</span> Share <span className='font-normal'>Your</span> Links </h1>
                <div className='mt-2 xl:mt-4 2xl:mt-9 text-[13px] md:text-lg lg:text-2xl xl:text-3xl 2xl:text-3xl font-Nunito text-[#BDBDBD] md:text-slate-400 2xl:text-slate-400 mx-auto flex flex-col justify-center items-center relative font-normal'>
                    <p>Tired of Links Longer Than Your Explanations?</p>
                    <p>Trim it down! Because nobody wants to read that long URL</p>
                </div>

                <div className='w-8xl mt-10 md:my-12 mx-auto relative flex justify-center'>
                    <input
                        className='w-[84%] xl:w-[80%] 2xl:w-[75%] h-16 px-6 font-Nunito font-normal text-base outline-none text-white bg-[#111827] border-4 border-[#1E293B] rounded-full'
                        type='text'
                        placeholder='Enter your link here'
                    />
                    <Button className='absolute text-[8px] md:text-xs rounded-lg right-[3rem] md:right-[5rem] lg:right-[6.5rem] xl:right-[10.5rem] 2xl:right-[15rem] top-[14px]' variant="primary">Trim Now</Button>
                </div>

                <span className='text-[10px] sm:text-base text-white mt-4 font-medium flex justify-center relative font-Nunito'>
                    Get more access over your links  by  <span className="relative mx-1">
                        getting started
                        <div className="bg-[#3B82F6] w-16 h-0.5 md:w-20 lg:w-24 2xl:w-24 2xl:h-0.5 absolute "></div>
                    </span>, lets do it now

                </span>


            </div>
        
            <Features />

        </div>
    )
}

export default HomePage