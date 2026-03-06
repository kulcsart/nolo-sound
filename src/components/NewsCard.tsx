import Image from "next/image";

interface NewsCardProps {
  date: string;
  title: string;
  description: string;
  image: string;
}

export default function NewsCard({
  date,
  title,
  description,
  image,
}: NewsCardProps) {
  return (
    <article className="news-card-hover flex h-full min-w-[262px] max-w-[360px] shrink-0 cursor-pointer flex-col overflow-hidden rounded p-5">
      {/* Image */}
      <div className="relative h-[262px] w-full overflow-hidden rounded bg-espresso">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover opacity-80 transition-transform duration-500 hover:scale-105"
          sizes="262px"
        />
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col gap-3 pt-5">
        <span className="font-[family-name:var(--font-body)] text-[length:var(--text-date)] font-semibold text-warmtan">
          {date}
        </span>
        <h3 className="font-[family-name:var(--font-heading)] text-[length:var(--text-h3)] text-ivory">
          {title}
        </h3>
        <p className="font-[family-name:var(--font-body)] text-[length:var(--text-body)] leading-[1.4] text-sand">
          {description}
        </p>
      </div>
    </article>
  );
}
