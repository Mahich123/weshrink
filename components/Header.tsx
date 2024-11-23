import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";


export const Header = () => {
  return (
    <div className="max-w-7xl 2xl:max-w-[92vw] mx-auto flex justify-between py-6 px-4 md:px-12 lg:px-16 md:py-12 items-center">
      <div className="w-[30%] 2xl:w-[70%]">
        <Image src="./Logo.svg" width={100}
          height={100} alt="logo" />
      </div>

      <Link href="/sign-up" className="w-[27%] md:w-2/12 lg:w-[13%] 2xl:w-1/12">
        <Button className="w-full text-xs" variant="primary">
          Get Started
        </Button>
      </Link>



    </div>
  )
}

