import Image from "next/image";
import ArtistBio from "../ArtistBio";
import { artists } from "@/lib/content";
import AnimatedSection from "../animations/AnimatedSection";

export default function ArtistsSection() {
  return (
    <section
      id="artists"
      className="w-full bg-espresso px-6 py-20 md:px-16 lg:px-[120px] lg:py-20"
    >
      <div className="mx-auto flex w-full flex-col gap-16 lg:px-12">
        {artists.map((artist, index) => {
          const isReversed = index % 2 !== 0;

          return (
            <div
              key={artist.name}
              className={`flex w-full flex-col lg:flex-row ${
                isReversed ? "lg:flex-row-reverse" : ""
              } ${index > 0 ? "pt-14" : ""}`}
            >
              {/* Artist image */}
              <AnimatedSection
                variant={isReversed ? "slide-left" : "slide-right"}
                delay={0.1}
                className="relative aspect-square w-full lg:w-1/2"
              >
                <Image
                  src={artist.image}
                  alt={artist.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </AnimatedSection>

              {/* Bio */}
              <AnimatedSection
                variant={isReversed ? "slide-right" : "slide-left"}
                delay={0.25}
                className="w-full lg:w-1/2"
              >
                <ArtistBio artist={artist} />
              </AnimatedSection>
            </div>
          );
        })}
      </div>
    </section>
  );
}
