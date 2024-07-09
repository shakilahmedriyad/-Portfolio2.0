import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const reviews = [
  {
    descriptions:
      "Shakil is probably the best full stack Svelte developer we've come across so far. He demonstrated deep and quick understanding of our application and expertly resolved each and every bug and even proposed new features. We've unanimously nominated him to continue as our lead Full Stack Developer on our team going forward.",
    name: "brainwavz",
    platform: "Fiverr",
    ratings: "⭐⭐⭐⭐⭐",
  },
  {
    descriptions:
      "Shakil is probably the best full stack Svelte developer we've come across so far. He demonstrated deep and quick understanding of our application and expertly resolved each and every bug and even proposed new features. We've unanimously nominated him to continue as our lead Full Stack Developer on our team going forward.",
    name: "brainwavz",
    platform: "Fiverr",
    ratings: "⭐⭐⭐⭐⭐",
  },
];

export default function Testimonials() {
  return (
    <section className="">
      <Carousel className="w-full mx-auto max-w-md">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="bg-gradient-to-tr from-gray-600 via-gray-700 to-gray-900 border-none shadow-2xl">
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-gray-200 border-none" />
        <CarouselNext className="bg-gray-200 border-none" />
      </Carousel>
    </section>
  );
}
