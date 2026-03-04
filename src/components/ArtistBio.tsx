import { Instagram, Facebook } from "lucide-react";
import ArtistPlayer from "./ArtistPlayer";
import type { Artist } from "@/lib/content";

interface ArtistBioProps {
  artist: Artist;
}

export default function ArtistBio({ artist }: ArtistBioProps) {
  return (
    <div className="flex w-full flex-col justify-center gap-6 overflow-hidden bg-coffeebean p-16 max-md:p-8">
      {/* Genre tag */}
      <div className="flex w-full">
        <span className="border border-muddywaters-20 px-2 py-1 font-[family-name:var(--font-body)] text-[length:var(--text-tag)] tracking-wider text-rosegold">
          {artist.tag}
        </span>
      </div>

      {/* Name */}
      <h3 className="font-[family-name:var(--font-heading)] text-[length:var(--text-h2)] text-ivory">
        {artist.name}
      </h3>

      {/* Description */}
      <p className="py-4 font-[family-name:var(--font-body)] text-[length:var(--text-body)] leading-[1.6] text-cream">
        {artist.description}
      </p>

      {/* Player */}
      <ArtistPlayer
        trackName={artist.track.name}
        duration={artist.track.duration}
      />

      {/* Footer row: profile link + social icons */}
      <div className="flex w-full items-center justify-between py-2">
        <a
          href="#"
          className="font-[family-name:var(--font-body)] text-[length:var(--text-body)] text-bronze transition-colors hover:text-gold"
        >
          View Profile
        </a>
        <div className="flex items-center gap-3">
          {artist.social.instagram && (
            <a
              href={artist.social.instagram}
              aria-label={`${artist.name} Instagram`}
              className="text-bronze transition-colors hover:text-gold"
            >
              <Instagram className="h-5 w-5" />
            </a>
          )}
          {artist.social.facebook && (
            <a
              href={artist.social.facebook}
              aria-label={`${artist.name} Facebook`}
              className="text-bronze transition-colors hover:text-gold"
            >
              <Facebook className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
