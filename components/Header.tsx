"use client";

import Link from "next/link";
import { Transition } from "@headlessui/react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";

export function Header({
  showCallToAction = false,
}: {
  showCallToAction?: boolean;
}) {
  return (
    <header>
      <Container className="realtive left-0 right-0 top-0 z-50 bg-white py-6 sm:border-t-0 sm:bottom-auto ">
        <nav className="justify-between ">
          <div className="items-center text-center">
            {/* <Link href="/" aria-label="Home">
              <Logo className="m-auto h-12 w-auto md:h-20" />
            </Link> */}
          </div>
        </nav>
      </Container>

      <Transition
        show={showCallToAction}
        enter="transition-opacity duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Container className="w-full fixed bottom-0 left-0 right-0 border-t-2 sm:border-t-0 sm:border-b-2 sm:bottom-auto sm:top-0 z-50 bg-white py-6 border-b-2 drop-shadow-xl">
          <nav className="relative z-50 flex justify-between ">
            <div className="flex items-center md:gap-x-12">
              {/* <Link href="/embrace" aria-label="Home">
              <Logo className="h-10 sm:h-20 w-auto " />
            </Link> */}
            </div>
            <div className="flex items-center gap-x-5 md:gap-x-8">
              <div className="block">
                <Button
                  className="text-sm md:text-lg ml-1 text-center"
                  href="https://shop.woofwoofwoof.com/quote"
                  color="blue"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </nav>
        </Container>
      </Transition>
    </header>
  );
}
