import Image from "next/image";

interface OwnerCardProps {
  name: string;
  role: string;
  avatar: string;
}

export default function OwnerCard({ name, role, avatar }: OwnerCardProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-3xl bg-espresso">
        <Image
          src={avatar}
          alt={name}
          fill
          className="object-cover"
          sizes="48px"
        />
      </div>
      <div className="flex flex-col">
        <span className="font-[family-name:var(--font-body)] text-[length:var(--text-label)] font-bold text-ivory">
          {name}
        </span>
        <span className="font-[family-name:var(--font-body)] text-[length:var(--text-date)] text-bronze">
          {role}
        </span>
      </div>
    </div>
  );
}
