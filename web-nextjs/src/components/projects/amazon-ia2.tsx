import Image from "next/image";

export default function AmazonIA2() {
  return (
    <>
      <h2>Amazon Advertising Information Architecture</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3>The Problem</h3>
          <p>
            The navigation system did not provide an intuitive interface for the
            customers to navigate the Advertising Console.
          </p>
          <ul>
            <li>
              <p>
                <strong>Accessibility: </strong>
                All the applications were hidden behind a slide out menu that
                could only be accessed by the customer when they hovered over the
                hamburger menu. Not only is this design not accessible for screen
                readers, the menu would auto collapse when the customer hovered
                out of the slide out menu. This hovering behaviour led to
                customers having to open the navigation menu multiple times to
                navigate to another application.
              </p>
            </li>
            <li>
              <p>
                <strong>Rebranding: </strong>
                The old navigation system had dated designs that had not been
                updated since the launch of Amazon Advertising. Due to the
                strong growth of Amazon Advertising over the past years,
                leadership decided to rebrand Amazon Advertising to bring the
                design more inline with other Amazon products.
              </p>
            </li>
            <li>
              <p>
                <strong>Technical Debt: </strong>
                As mentioned in the previous point, the navigation system has not
                been updated since the launch of Amazon Advertising. The
                navigation menu was written with a combination of Java and React.
                The React application fully relied on <code>props</code> for
                state management which resulted &quot;prop drilling&quot;.
              </p>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-center">
          <Image
            src="/projects/amazon-ia2/advertising-console-old.png"
            alt="Amazon Ads Nav"
            width={600}
            height={400}
            className="w-full h-auto shadow-[5px_5px_5px_rgba(0,0,0,0.2)]"
            unoptimized
          />
        </div>
      </div>

      <hr className="my-8 border-t-2 border-dotted border-[#ddd] w-4/5 mx-auto" />

      <h3>Challenges</h3>
      <ul>
        <li>
          <p>
            <strong>Resourcing Constraints: </strong>This project required both
            backend and frontend changes to the application and the split was
            roughly 30% and 70% respectively. There were two Software
            Development Engineers (SDE) and only one Front End Engineer (FEE)
            working on this project. The front end development become the
            bottleneck of this project.
          </p>
        </li>
        <li>
          <p>
            <strong>Architecture Constraints: </strong>The legacy navigation
            renders on the client side. Our team wanted to implement server side
            rendering (SSR) for the navigation to improve the client side
            rendering performance. However, due to the reduced resourcing and
            time constraints, our team decided to leverage existing client side
            rendering architecture to complete the project on time.
          </p>
        </li>
      </ul>

      <hr className="my-8 border-t-2 border-dotted border-[#ddd] w-4/5 mx-auto" />

      <h3>Results</h3>
      <Image
        src="/projects/amazon-ia2/amazon-ia2.png"
        alt="Amazon Ads New Nav"
        width={1200}
        height={600}
        className="w-full h-auto shadow-[5px_5px_5px_rgba(0,0,0,0.2)]"
        unoptimized
      />
      <p>
        From design to launch, the project took 11 months and our team was able
        to launch the rebranding and new information architecture on time in
        October 2021. Although we did not implement SSR for this project, the new
        Javascript bundle that we developed still included 13% reduction in
        Javascript execution time, 10% reduction in bundle size and 13 point
        increase in Lighthouse score.
      </p>
    </>
  );
}
