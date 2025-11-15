import Image from 'next/image';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const capabilities = [
  {
    title: 'Autonomous Surveillance',
    description:
      'High-endurance UAVs equipped with advanced electro-optical/infrared (EO/IR) sensors for persistent intelligence, surveillance, and reconnaissance (ISR).',
    imageId: 'capability-surveillance',
  },
  {
    title: 'High-Payload Delivery',
    description:
      'Robust and reliable drone platforms designed for secure, rapid delivery of critical cargo in challenging operational theaters.',
    imageId: 'capability-delivery',
  },
  {
    title: '3D Terrain Mapping',
    description:
      'Utilize cutting-edge LiDAR and photogrammetry to generate high-resolution 3D models for tactical planning and analysis.',
    imageId: 'capability-mapping',
  },
];

export function Capabilities() {
  const images = PlaceHolderImages;

  return (
    <section id="capabilities" className="bg-secondary py-20 sm:py-28">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Core Capabilities
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/60">
            Engineered for the most critical missions.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability) => {
            const image = images.find((img) => img.id === capability.imageId);
            return (
              <Card
                key={capability.title}
                className="overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20"
              >
                {image && (
                  <CardHeader className="p-0">
                    <div className="relative h-48 w-full">
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        fill
                        className="object-cover"
                        data-ai-hint={image.imageHint}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </CardHeader>
                )}
                <CardContent className="p-6">
                  <CardTitle className="mb-2 text-xl font-semibold">
                    {capability.title}
                  </CardTitle>
                  <p className="text-foreground/70">
                    {capability.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
