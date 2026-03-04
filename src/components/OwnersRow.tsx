import OwnerCard from "./OwnerCard";
import { about } from "@/lib/content";

export default function OwnersRow() {
  return (
    <div className="flex items-center gap-6">
      {about.owners.map((owner, i) => (
        <div key={owner.name} className="flex items-center gap-6">
          {i > 0 && (
            <div
              className="h-12 w-px"
              style={{
                background:
                  "linear-gradient(to bottom, #d4a574, #1d1a11)",
              }}
            />
          )}
          <OwnerCard
            name={owner.name}
            role={owner.role}
            avatar={owner.avatar}
          />
        </div>
      ))}
    </div>
  );
}
