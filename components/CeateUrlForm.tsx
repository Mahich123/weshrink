"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function CreateUrlForm() {
  const [enableExpiry, setEnableExpiry] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted")
  }
// "w-full max-w-md mx-auto bg-[#605678]/40 border-[#D9D9D9]"
  return (
    <Card className={cn("w-full max-w-[20rem] md:max-w-md  mx-auto bg-[#605678]/40 border-[#D9D9D9]")}>
      <CardHeader>
        <CardTitle className="text-2xl font-bold"></CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2 text-white">
            <Label htmlFor="url">Original URL</Label>
            <Input className="bg-[#4D495E]" id="url" placeholder="" required type="url" />
          </div>
          <div className="space-y-2 text-white">
            <Label htmlFor="name">Name of the URL</Label>
            <Input className="bg-[#4D495E]" id="name" placeholder="" required />
          </div>
          <div className="space-y-2 text-white">
            <Label htmlFor="alias">Custom Alias (Optional)</Label>
            <Input className="bg-[#4D495E]" id="alias" placeholder="" />
          </div>
          <div className="flex items-center space-x-2 text-white">
            <Switch
              id="enable-expiry"
              checked={enableExpiry}
              onCheckedChange={setEnableExpiry}
            />
            <Label htmlFor="enable-expiry">Enable Expiry</Label>
          </div>
          <CardFooter className="px-0">
            <Button type="submit" className="w-full bg-[#D9D9D9] hover:bg-[#605678] hover:border border-white-500 hover:text-white text-black">Create Link</Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  )
}

