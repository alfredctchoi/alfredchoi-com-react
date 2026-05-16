import Image from "next/image";
import ImageCrossfade from "./image-crossfade";

const usageImages = [
  { src: "/projects/telus-usage/old.png", alt: "Legacy usage page", label: "Before" },
  { src: "/projects/telus-usage/new.png", alt: "Redesigned usage page", label: "After" },
];

export default function TelusUsage() {
  return (
    <>
      <h2>TELUS Usage Redesign</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3>Context</h3>
          <p>
            The usage page was a 2015-era PHP view built on CodeIgniter — never
            updated, difficult to maintain, and unable to support the new
            unlimited plan structures launching in 2018. We took the migration to
            JavaScript as an opportunity to redesign the experience from scratch.
          </p>

          <Image
            src="/projects/telus-usage/old.png"
            alt="Legacy usage page"
            width={400}
            height={600}
            className="w-full h-auto rounded-sm md:hidden"
            unoptimized
          />

          <h3>Business Complexity</h3>
          <p>
            The design needed to handle every plan permutation sold over the past
            decade — legacy tiered plans, shared data pools, and the newly
            launched unlimited tiers. We initially explored per-plan layouts but
            quickly realized the permutation count was unmanageable. Instead, we
            built a generic meter-based system that adapts to any plan type,
            validated it against the majority of use cases, and iterated from
            there.
          </p>

          <Image
            src="/projects/telus-usage/new.png"
            alt="Redesigned usage page"
            width={400}
            height={600}
            className="w-full h-auto rounded-sm md:hidden"
            unoptimized
          />

          <h3>Technical Complexity</h3>
          <p>
            The backend required sequential calls to multiple legacy services,
            stitching payloads together by shared identifiers — complexity that
            ideally belongs at the database level. Response times were high, so
            we loaded page sections asynchronously to keep the perceived
            performance fast while data resolved in the background.
          </p>
        </div>
        <div className="hidden md:block">
          <ImageCrossfade
            images={usageImages}
            interval={3000}
            width={400}
            height={600}
            className="w-full"
          />
        </div>
      </div>
    </>
  );
}
