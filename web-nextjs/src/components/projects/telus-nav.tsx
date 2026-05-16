import Image from "next/image";

export default function TelusNav() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2>My TELUS Navigation Migration</h2>
          <h3>Background</h3>
          <p>
            The legacy My TELUS navigation couldn&apos;t serve different customer
            segments — corporate users saw the same menu as consumers. We set out
            to solve three problems:
          </p>
          <ul>
            <li>
              <p>
                <strong>Information Architecture:</strong> Establish a consistent
                navigation hierarchy that helps users find what they need without
                guessing.
              </p>
            </li>
            <li>
              <p>
                <strong>Scalability:</strong> Build a framework capable of
                serving segment-specific navigation (consumer, corporate, small
                business) from a single codebase.
              </p>
            </li>
            <li>
              <p>
                <strong>Screen Real Estate:</strong> The left-hand sidebar wasted
                vertical space below the nav items — reclaiming it meant more
                room for content.
              </p>
            </li>
          </ul>

          <Image
            src="/projects/telus-nav/nav-gif.gif"
            alt="Navigation migration demo"
            width={400}
            height={600}
            className="w-full h-auto rounded-sm md:hidden"
            unoptimized
          />

          <h3>Technical Challenges</h3>
          <p>
            Migrating from PHP to JavaScript meant running two authentication
            systems in parallel — one for the legacy stack and one for the new.
            Since we couldn&apos;t fully decommission the old system, we built a
            transparent dual-login flow that established sessions on both stacks
            behind the scenes. This let a single navigation component work across
            both environments.
          </p>
          <p>
            We built an API that resolves the customer&apos;s segment and permissions,
            then returns the appropriate navigation structure — scripts and
            content loaded dynamically on the client.
          </p>
        </div>
        <div className="hidden md:block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/projects/telus-nav/nav-gif.gif"
            alt="Navigation migration demo"
            className="w-full h-auto rounded-sm"
          />
        </div>
      </div>
    </>
  );
}
