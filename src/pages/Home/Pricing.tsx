import { MessageCircle } from "lucide-react";

type PricingCardProps = {
  title: string;
  price: number | string;
  features: Array<{ text: string; addon?: boolean }>;
  isHighlighted?: boolean;
};

const PricingCard = ({
  title,
  price,
  features,
  isHighlighted = false,
}: PricingCardProps) => (
  <div className="group rounded-md bg-white p-2 text-left text-[var(--sitora-primary)] shadow-xl shadow-black/5 transition-transform hover:-translate-y-1">
    <a
      href="#"
      className="flex h-full cursor-pointer select-none flex-col items-center rounded-md"
    >
      <div className="w-full p-4">
        <h3 className="text-2xl font-black text-[var(--sitora-primary)]">
          {title}
        </h3>
      </div>
      <div className="w-full px-4 pb-2">
        <p className="text-2xl font-black leading-none">
          {typeof price === "string" && price !== "Get a Quote" ? (
            <>
              <span className="text-xs">Rp. </span>
              {price}
            </>
          ) : (
            price
          )}
        </p>
      </div>
      <div className="w-full flex-1 p-4">
        <ul className="list-inside list-disc divide-y text-sm">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-start py-2 text-left text-black"
            >
              <p className="w-full">{feature.text}</p>
              {feature.addon && (
                <span className="whitespace-no-wrap inline-flex whitespace-nowrap rounded bg-gray-50 p-1 text-stone-500">
                  add-on
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full px-4 pb-4">
        <p
          className={`group flex w-full items-center justify-center rounded py-1 text-center font-bold transition ${
            isHighlighted
              ? "bg-[var(--sitora-primary)] text-white"
              : "group-hover:bg-[var(--sitora-primary)] group-hover:text-white"
          }`}
        >
          Get Started
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-4 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </p>
      </div>
    </a>
  </div>
);

const Pricing = () => {
  const pricingData = [
    {
      title: "Basic Package",
      price: "2.999.999",
      features: [
        { text: "Attractive Website Design" },
        { text: "Up to 5 pages website" },
        { text: "Basic SEO Optimization" },
        { text: "Up To 2 Weeks Delivery" },
      ],
    },
    {
      title: "Full Package",
      price: "5.499.999",
      features: [
        { text: "Attractive Website Design" },
        {
          text: "Up to 10 pages website",
        },
        { text: "Advanced SEO Optimization" },
        { text: "Up To 2 Weeks Delivery" },
        { text: "Revision up to 4x" },
        { text: "Custom Animation" },
        { text: "Include Your Own Domain and Hosting (example: .id or .com)" },
        { text: "Include Email for up to 50 Accounts" },
      ],
    },
    // {
    //   title: "Enterprise Package",
    //   price: "9.999.999",
    //   features: [
    //     { text: "Invite up to 3 clients." },
    //     { text: "No contributors." },
    //     { text: "White-label.", addon: true },
    //   ],
    // },
    {
      title: "Custom Package",
      price: "Get a Quote",
      features: [
        { text: "Everything in Full Package" },
        { text: "Custom Backend Development" },
        { text: "Advanced Analytics" },
        { text: "4 Weeks Delivery" },
        { text: "2 Months Support" },
        { text: "Security Hardening" },
      ],
    },
  ];

  return (
    <div className="min-h-screen relative pb-16">
      {/* Background gradient that extends with content */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-[var(--sitora-primary)]" />

      {/* Content container */}
      <div className="relative mx-auto w-full max-w-screen-xl px-2 pt-20 text-left sm:px-10">
        <div className="mb-16">
          <h1 className="text-center text-4xl font-bold text-white sm:text-5xl">
            Straight Forward Pricing
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-center text-white/70">
            Our packages are designed to fit every all kinds of needs. Start
            your project with us.
          </p>
          <button
            onClick={() =>
              window.open("https://wa.me/+6281336214840", "_blank")
            }
            className="mx-auto mt-8 flex items-center rounded-lg border border-black bg-[var(--sitora-primary)] px-4 py-2 font-semibold text-white hover:border-white hover:bg-[var(--sitora-primary)]"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Talk to Sales
          </button>
        </div>
        <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          {pricingData.map((plan, index) => (
            <PricingCard
              key={plan.title}
              {...plan}
              isHighlighted={index === 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
