import { Play } from "lucide-react";

interface ArtistPlayerProps {
  trackName: string;
  duration: string;
  /** Progress 0-100 */
  progress?: number;
}

export default function ArtistPlayer({
  trackName,
  duration,
  progress = 35,
}: ArtistPlayerProps) {
  return (
    <div className="flex w-full items-center gap-4 border-l-2 border-gold bg-espresso p-4">
      {/* Play button */}
      <button
        className="flex h-10 w-10 shrink-0 items-center justify-center bg-darkbrown transition-colors hover:bg-copper"
        aria-label={`Play ${trackName}`}
      >
        <Play className="h-4 w-4 fill-gold text-gold" />
      </button>

      {/* Track info */}
      <div className="flex w-full flex-col gap-2">
        {/* Progress bar */}
        <div className="relative h-0.5 w-full bg-darkbrown">
          <div
            className="absolute left-0 top-0 h-full bg-gold"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Track name + duration */}
        <div className="flex w-full items-center justify-between">
          <span className="truncate font-[family-name:var(--font-body)] text-[length:var(--text-date)] font-medium text-sand">
            {trackName}
          </span>
          <span className="shrink-0 font-[family-name:var(--font-body)] text-[length:var(--text-date)] text-bronze">
            {duration}
          </span>
        </div>
      </div>
    </div>
  );
}
