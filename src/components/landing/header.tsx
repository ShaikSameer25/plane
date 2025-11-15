"use client";

import * as React from 'react';
import Link from 'next/link';
import { DroneLogo } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { ContactDialog } from './contact-dialog';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#capabilities', label: 'Capabilities' },
  { href: '#highlights', label: 'Highlights' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        {/* Desktop Nav */}
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <DroneLogo className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block">VyomGarud</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/60 transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Logo */}
        <div className="flex items-center md:hidden">
          <Link href="/" className="flex items-center space-x-2">
            <DroneLogo className="h-6 w-6 text-primary" />
            <span className="font-bold">VyomGarud</span>
          </Link>
        </div>

        {/* Right side */}
        <div className="flex flex-1 items-center justify-end space-x-2">
          <div className="hidden md:flex">
            <ContactDialog
              trigger={<Button>Contact Us</Button>}
            />
          </div>
          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-background">
              <div className="mt-8 flex flex-col items-start">
                <Link
                  href="/"
                  className="mb-6 flex items-center space-x-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <DroneLogo className="h-6 w-6 text-primary" />
                  <span className="font-bold">VyomGarud</span>
                </Link>
                <nav className="flex w-full flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block py-2 text-lg font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <ContactDialog
                      trigger={<Button className="mt-4 w-full">Contact Us</Button>}
                    />
                  </div>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
