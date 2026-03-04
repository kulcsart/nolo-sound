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
    <article className="flex w-[262px] shrink-0 flex-col gap-4">
      {/* Image */}
      <div className="relative h-[262px] w-full overflow-hidden bg-espresso">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover opacity-80"
          sizes="262px"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col gap-3">
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
