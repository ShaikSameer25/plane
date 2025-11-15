"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';
import React from 'react';
import { DroneLogo } from '@/components/icons';

function AirplaneAnimation({ onAnimationEnd }: { onAnimationEnd: () => void }) {
  const [animationStep, setAnimationStep] = React.useState('start');

  React.useEffect(() => {
    const timer1 = setTimeout(() => {
      setAnimationStep('grow');
    }, 100);

    const timer2 = setTimeout(() => {
      setAnimationStep('fly');
    }, 1100); // 100ms start + 1000ms grow

    const timer3 = setTimeout(() => {
      onAnimationEnd();
    }, 2600); // 1100ms + 1500ms fly

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onAnimationEnd]);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      <div
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 transition-all duration-1000 ease-out
          ${animationStep === 'start' ? 'translate-y-full' : ''}
          ${
            animationStep === 'grow'
              ? 'h-screen w-screen scale-150 -translate-y-1/2'
              : 'h-64 w-64'
          }
          ${
            animationStep === 'fly'
              ? 'h-screen w-screen scale-150 -translate-y-[150vh]'
              : ''
          }
          transition-transform
        `}
        style={{
          transitionDuration: animationStep === 'fly' ? '1.5s' : '1s',
        }}
      >
        <Image
          src="/airplane.png"
          alt="Airplane animation"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
}

function BlinkingAirplane() {
  return (
    <div className="pointer-events-none fixed bottom-0 left-4 z-20 animate-fly-up-left">
      <div className="relative h-12 w-12 text-white/80">
        <DroneLogo className="h-full w-full" />
        <div className="absolute top-1/2 left-1/2 h-1 w-1 -translate-x-2 -translate-y-1 animate-blink-red rounded-full bg-red-500 shadow-[0_0_4px_1px_rgba(239,68,68,0.7)]"></div>
        <div className="absolute top-1/2 right-1/2 h-1 w-1 translate-x-2 -translate-y-1 animate-blink-blue rounded-full bg-blue-500 shadow-[0_0_4px_1px_rgba(59,130,246,0.7)]"></div>
      </div>
    </div>
  );
}

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-drone');
  const [isClicked, setIsClicked] = React.useState(false);
  const [showAnimation, setShowAnimation] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsClicked(true);
    setShowAnimation(true);
    // The scrolling will be triggered by onAnimationEnd
  };

  const handleAnimationEnd = () => {
    setShowAnimation(false);
    const targetId = 'capabilities';
    const targetElement = document.getElementById(targetId);
    targetElement?.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      setIsClicked(false);
    }, 300);
  };

  return (
    <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
      {showAnimation && <AirplaneAnimation onAnimationEnd={handleAnimationEnd} />}
      <BlinkingAirplane />
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            VyomGarud
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-200 sm:text-xl md:text-2xl">
            Precision Engineering. Advanced Autonomy.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              asChild
              className={`transition-transform duration-300 ${
                isClicked ? 'animate-bounce-short' : ''
              }`}
            >
              <Link href="#capabilities" onClick={handleClick}>
                Explore Our Systems <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-background"
              asChild
            >
              <Link href="#contact">Request a Demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
