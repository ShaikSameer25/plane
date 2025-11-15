import { ShieldCheck, Cpu, RadioTower } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Highlight {
  icon: LucideIcon;
  title: string;
  description: string;
}

const highlights: Highlight[] = [
  {
    icon: ShieldCheck,
    title: 'Military-Grade Reliability',
    description:
      'Built to MIL-STD-810 standards for performance in extreme conditions. Our systems offer maximum uptime and mission readiness.',
  },
  {
    icon: Cpu,
    title: 'AI-Powered Autonomy',
    description:
      'Onboard AI for dynamic mission planning, threat detection, and autonomous navigation in GPS-denied environments.',
  },
  {
    icon: RadioTower,
    title: 'Secure Long-Range Comms',
    description:
      'Encrypted, jam-resistant data links ensure secure command and control and real-time data transmission over extended distances.',
  },
];

export function Highlights() {
  return (
    <section id="highlights" className="py-20 sm:py-28">
      <div className="container">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Technological Edge
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/60">
              Why our systems stand out from the rest.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {highlights.map((highlight) => (
              <div
                key={highlight.title}
                className="flex flex-col items-center text-center md:items-start md:text-left"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <highlight.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-medium">{highlight.title}</h3>
                  <p className="mt-2 text-base text-foreground/70">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
