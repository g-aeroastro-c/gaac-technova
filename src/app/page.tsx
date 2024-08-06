'use client'

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { HeroScrollDemo } from "../components/hero"
import { NavigationMenuDemo } from "@/components/navbar"
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

export default function Home() {
  return (
    <main>
      <ClerkProvider>
        <div className="mt-5 flex justify-end mr-5">
        <Button variant="outline">
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </Button>
        </div>
        <div className="justify-center flex">
          <NavigationMenuDemo>
            
          </NavigationMenuDemo>
        </div>
      </ClerkProvider>

      <HeroScrollDemo />

      
    </main>
  );
}
