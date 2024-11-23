"use client"

import Image from "next/image"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { z } from 'zod'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"



const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(5, {
        message: "Password should not be less than 5 characters"
    }),

})

const SignInPage = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
        <div className="bg-[#191933] h-screen flex flex-col items-center justify-center">
            <div className="text-white">
                <div className="flex justify-center mb-4 2xl:mb-2">
                   <Link href="/">
                   <Image src="./Logo.svg" alt="logo" width={100} height={100} />
                   </Link>
                </div>
                <h1 className="text-[#BDBDBD] font-Nunito font-medium 2xl:text-lg 2xl:font-bold flex justify-center items-center">Welcome Back! Sign In</h1>
            </div>

            <div className="my-8 2xl:my-2 2xl:w-96">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 text-white">


                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="email" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>passowrd</FormLabel>
                                    <FormControl>
                                        <Input placeholder="password" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />


                        <div className="flex flex-col gap-y-3 2xl:gap-y-4">
                            <Button className="2xl:mt-2" variant="signup" type="submit">Sign in</Button>
                            <Link href='sign-up' className="w-full">
                            <Button variant="signin">
                               Sign up
                            </Button>
                            </Link>
                        </div>

                        <div className="inline-flex items-center justify-center w-full">
                            <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                            <span className="absolute px-3 font-Nunito text-white -translate-x-1/2 bg-[#191933]  left-1/2 dark:text-white dark:bg-gray-900">Or continue with</span>
                        </div>

                        <div className="grid items-center justify-center gap-x-2 gap-y-4 grid-cols-4">
                            <Button className="col-span-2" variant="signin" type="submit">Github</Button>
                            <Button className="col-span-2" variant="signin" type="submit">Google</Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default SignInPage