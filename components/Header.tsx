"use client"

import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { useSession } from "@/app/hooks/use-session";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Github } from "lucide-react";
import { usePathname } from 'next/navigation';

const Header = () => {
  const { session } = useSession()
  const pathname = usePathname()
  const dashboardNav = pathname === '/dashboard'

  return (
    <div className="max-w-7xl 2xl:max-w-[92vw] mx-auto flex justify-between py-6 px-4 md:px-12 lg:px-16 md:py-12 items-center">

      {
        dashboardNav && session ? (
          <>
            <div className="hidden cursor-pointer border border-white lg:flex lg:items-center gap-3 p-2 rounded-xl">
              <Link href="https://github.com/Mahich123/weshrink">
                <Github className="text-white" size={30} />
              </Link>
            </div>
            <div className="">
              <Image src="/Logo.svg" width={100}
                height={100} alt="logo" />
            </div>
            {
              session?.user ? (
                <div>

                  <Popover>
                    <PopoverTrigger>
                      <Image className="rounded-full outline-none" src={session?.user.image} alt="avatar" width={40} height={40} />
                    </PopoverTrigger>
                    <PopoverContent className="bg-[#4E4E55]">
                      <h3 className="uppercase font-semibold text-sm text-white">
                        {session?.user.name}
                      </h3>
                      <h2 className="my-2 text-xs text-white">{session?.user.email}</h2>
                      <p className="my-2 text-xs text-white cursor-pointer" onClick={() => alert("coming soon")}>Check your links</p>
                      <Link href="/api/auth/signout">
                        <Button variant="outline">Sign out</Button>
                      </Link>
                    </PopoverContent>
                  </Popover>
                </div>
              ) : <Link href="/sign-up" className="w-[27%] md:w-2/12 lg:w-[13%] 2xl:w-1/12">
                <Button className="w-full text-xs" variant="primary">
                  Get Started
                </Button>
              </Link>
            }
          </>
        ) : (
          <>

            <div className="w-[30%] 2xl:w-[70%]">
              <Image src="/Logo.svg" width={100}
                height={100} alt="logo" />
            </div>

            {
              session?.user ? (
                <div>

                  <Popover>
                    <PopoverTrigger>
                      <Image className="rounded-full outline-none" src={session?.user.image} alt="avatar" width={40} height={40} />
                    </PopoverTrigger>
                    <PopoverContent className="bg-[#4E4E55]">
                      <h3 className="uppercase font-semibold text-sm text-white">
                        {session?.user.name}
                      </h3>
                      <h2 className="my-2 text-xs text-white">{session?.user.email}</h2>
                      <Link href="/dashboard">
                        <p className="my-2 text-xs text-white cursor-pointer">Go to Dashboard</p>
                      </Link>
                      <Link href="/api/auth/signout">
                        <Button variant="outline">Sign out</Button>
                      </Link>
                    </PopoverContent>
                  </Popover>
                </div>
              ) : <Link href="/sign-up" className="w-[27%] md:w-2/12 lg:w-[13%] 2xl:w-1/12">
                <Button className="w-full text-xs" variant="primary">
                  Get Started
                </Button>
              </Link>
            }
          </>
        )
      }

    </div>
  )
}

export default Header;