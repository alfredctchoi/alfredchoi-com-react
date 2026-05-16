import Image from "next/image";

export default function TelusPom() {
  return (
    <>
      <h2>TELUS Peace of Mind Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3>Background</h3>
          <p>
            TELUS mobility customers faced two long-standing pain points:
          </p>
          <ol>
            <li>
              <p>
                <strong>Data overage charges:</strong> Customers were frequently
                surprised by overage fees, generating significant support volume
                and dissatisfaction.
              </p>
            </li>
            <li>
              <p>
                <strong>Opaque device subsidies:</strong> Billing systems
                couldn&apos;t separate plan costs from device financing, making it
                impossible for customers to understand what they were paying for.
              </p>
            </li>
          </ol>
        </div>
        <div>
          <Image
            src="/projects/telus-pom/telus-peace-of-mind.jpg"
            alt="TELUS Peace of Mind Plans"
            width={600}
            height={400}
            className="w-full h-auto rounded-sm"
            unoptimized
          />
        </div>
      </div>

      <hr />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Image
            src="/projects/telus-pom/telus-device-financing-example.png"
            alt="TELUS Device Financing breakdown"
            width={600}
            height={400}
            className="w-full h-auto rounded-sm"
            unoptimized
          />
        </div>
        <div>
          <h3>Solution</h3>
          <p>
            Peace of Mind Plans introduced unlimited data (throttled after the
            cap, never charged) and separated device financing into its own line
            item. Customers could now see exactly what they pay for their plan
            versus their phone.
          </p>
          <p>
            After hitting their data limit, users continue browsing at reduced
            speeds at no extra cost — or purchase a Fast Pass to restore full LTE
            speeds instantly.
          </p>
        </div>
      </div>

      <hr />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3>Challenges</h3>
          <p>
            This was a fundamental restructuring of how TELUS bills and meters
            data — touching systems from the records layer up to the customer-facing
            digital experience. Coordination spanned multiple organizations.
          </p>
          <p>
            Our team owned the usage and plan-change experiences in My TELUS. We
            built new usage visualizations for unlimited plans and implemented
            complex eligibility rules that governed which customers could migrate
            and when.
          </p>
        </div>
        <div>
          <Image
            src="/projects/telus-pom/telus-usage-overhaul.png"
            alt="Updated usage experience"
            width={600}
            height={400}
            className="w-full h-auto rounded-sm"
            unoptimized
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div>
          <p>
            The plan-change flow required a controlled rollout — eligibility
            rules determined which segments could switch immediately and which
            would be migrated gradually, preventing system overload and ensuring
            a smooth transition.
          </p>
        </div>
        <div>
          <Image
            src="/projects/telus-pom/telus-plans-and-devices.png"
            alt="TELUS plans and devices selection"
            width={600}
            height={400}
            className="w-full h-auto rounded-sm"
            unoptimized
          />
        </div>
      </div>
    </>
  );
}
