import { Button } from "@/components/ui/button";
import { link } from "fs";
import { CirclePlus, Sidebar } from "lucide-react";
import Image from "next/image";
import {Navbar} from "@/components/Navbar"
import { defaultConfig } from "next/dist/server/config-shared";


export default function Home(){
  return (
    <div className="w-full h-full">
      <Navbar/>
      <main className="h-full flex w-full flex-col">

      </main>
    </div>
  )
}

