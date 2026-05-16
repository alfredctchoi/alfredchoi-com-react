import Image from "next/image";

export default function AmazonIA2() {
  return (
    <>
      <h2>Amazon Advertising Information Architecture</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3>The Problem</h3>
          <p>
            Advertising Console&apos;s navigation was unintuitive and inaccessible.
            Applications were buried behind a hover-triggered slide-out menu that
            screen readers couldn&apos;t reach and that collapsed the moment a user
            moved their cursor away — forcing repeated attempts just to switch
            between products.
          </p>
          <ul>
            <li>
              <p>
                <strong>Accessibility:</strong> The hover-only menu was unusable
                for keyboard and assistive-technology users, violating WCAG
                guidelines and frustrating all customers.
              </p>
            </li>
            <li>
              <p>
                <strong>Rebranding:</strong> Amazon Advertising had outgrown its
                original visual identity. Leadership mandated a rebrand aligned
                with the broader Amazon design language.
              </p>
            </li>
            <li>
              <p>
                <strong>Technical Debt:</strong> The nav was a Java/React hybrid
                that relied entirely on prop drilling for state — fragile,
                difficult to extend, and never refactored since launch.
              </p>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-center">
          <Image
            src="/projects/amazon-ia2/advertising-console-old.png"
            alt="Legacy Advertising Console navigation"
            width={600}
            height={400}
            className="w-full h-auto rounded-sm"
            unoptimized
          />
        </div>
      </div>

      <hr />

      <h3>Challenges</h3>
      <ul>
        <li>
          <p>
            <strong>Resourcing:</strong> The project split roughly 30/70 between
            backend and frontend work, but the team had two SDEs and only one
            Front End Engineer. Frontend delivery became the critical path.
          </p>
        </li>
        <li>
          <p>
            <strong>Architecture Trade-offs:</strong> We wanted server-side
            rendering to improve load performance, but the timeline and reduced
            headcount made it impractical. We shipped on the existing CSR
            architecture and deferred SSR to a follow-up initiative.
          </p>
        </li>
      </ul>

      <hr />

      <h3>Results</h3>
      <Image
        src="/projects/amazon-ia2/amazon-ia2.png"
        alt="Redesigned Advertising Console navigation"
        width={1200}
        height={600}
        className="w-full h-auto rounded-sm"
        unoptimized
      />
      <p>
        Shipped on time in October 2021 after 11 months of development. Even
        without SSR, the new bundle delivered a 13% reduction in JavaScript
        execution time, 10% smaller bundle size, and a 13-point improvement in
        Lighthouse score — while making the navigation fully accessible for the
        first time.
      </p>
    </>
  );
}
