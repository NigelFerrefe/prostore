"use client";

import { Product } from "@/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import Image from "next/image";

const ProductCarousel = ({ data }: { data: Product[] }) => {
  return (
    <Carousel
      className="'w-full mb-10 ml-5 mr-5"
      opts={{ loop: true }}
      plugins={[
        Autoplay({
          delay: 10000,
          stopOnInteraction: true,
          stopOnMouseEnter: true,
        }),
      ]}
    >
      <CarouselContent>
        {data.map((d: Product) => (
          <CarouselItem key={d.id}>
            <Link href={`/product/${d.slug}`}>
              <div className="relative mx-auto">
                <Image
                  src={d.banner!}
                  alt={d.name}
                  height={"0"}
                  width={"0"}
                  sizes="100vw"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 flex items-end justify-center">
                  <h2 className="bg-gray-900 bg-opacity-50 text-2xl font-bold px-2 text-white">
                    {d.name}
                  </h2>
                </div>
              </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ProductCarousel;
