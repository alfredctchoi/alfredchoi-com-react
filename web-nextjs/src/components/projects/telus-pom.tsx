import Image from "next/image";

export default function TelusPom() {
  return (
    <>
      <h2>TELUS Peace of Mind Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p>
            Before Peace of Mind Plans were introduced, mobility customers faced
            two major issues:
          </p>
          <ol>
            <li>
              <p>
                <strong>Data Overage Complaints:</strong> Many of TELUS&apos;
                customers have expressed frustration about overage charges with
                their data usage.
              </p>
            </li>
            <li>
              <p>
                <strong>Subsidized Plans:</strong> For the mobility users that
                were on a subsidized phone plan, our systems were not able to
                differentiate which portion of the billing statement was going
                towards the phone subsidy and which portion was going to the
                phone plan.
              </p>
            </li>
          </ol>
        </div>
        <div>
          <Image
            src="/projects/telus-pom/telus-peace-of-mind.jpg"
            alt="TELUS Peace of Mind"
            width={600}
            height={400}
            className="w-full h-auto"
            unoptimized
          />
        </div>
      </div>

      <hr className="my-8 border-t-2 border-dotted border-[#ddd] w-4/5 mx-auto" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Image
            src="/projects/telus-pom/telus-device-financing-example.png"
            alt="TELUS Device Financing"
            width={600}
            height={400}
            className="w-full h-auto"
            unoptimized
          />
        </div>
        <div>
          <h3>Solution</h3>
          <p>
            Device financing allows TELUS to clearly separate the charges for
            the phone plan and charges for the device if the user purchased a
            device with a phone plan through TELUS. As many of the mobile
            devices are becoming increasingly expensive, device financing makes
            the devices more affordable.
          </p>
          <p>
            The business decided to solve the two problems by introducing
            unlimited data plans and device financing. Unlimited plans will allow
            customers to consume data at LTE speeds until they hit their data
            limit. After the user consumes all of their data for the month, they
            can continue to use data at a slower speed. The data that they
            consumed on the slower network speed will not be charged. Users can
            purchase Fast Passes to resume their LTE network speeds if they
            wish.
          </p>
        </div>
      </div>

      <hr className="my-8 border-t-2 border-dotted border-[#ddd] w-4/5 mx-auto" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3>Challenges</h3>
          <p>
            This is fundamental change in the way all the underlying systems
            work at TELUS. There needed to be collaboration and coordination
            from every level of the organization. From the systems of records
            level all the way up to the digital experiences.
          </p>
          <p>
            Our team was responsible for updating the usage and plan change
            digital experiences in My TELUS. Because the data metering systems
            needed to be updated to account for unlimited data usage, our team
            had to develop a new usage experience to accommodate for users with
            the new unlimited plans.
          </p>
        </div>
        <div className="text-center">
          <Image
            src="/projects/telus-pom/telus-usage-overhaul.png"
            alt="TELUS usage overhaul"
            width={600}
            height={400}
            className="w-full h-auto"
            unoptimized
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
        <div>
          <p>
            For the plan change digital experience, there were complex rules on
            which users were allowed to switch to the new plans and which users
            could only modify their existing plans. This was done to ensure that
            users were gradually migrated to the new plans in a controlled
            manner.
          </p>
        </div>
        <div className="text-center">
          <Image
            src="/projects/telus-pom/telus-plans-and-devices.png"
            alt="TELUS plans and devices"
            width={600}
            height={400}
            className="w-full h-auto"
            unoptimized
          />
        </div>
      </div>
    </>
  );
}
