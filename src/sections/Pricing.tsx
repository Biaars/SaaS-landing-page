"use client";

import CheckIcon from "@/assets/check.svg";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="centered-content-container">
          <h2 className="h2-style">Pricing</h2>
          <p className="paragraph text-center">
            Free forever. Upgrade for unlimited tasks, better security and
            exclusive features.
          </p>
        </div>

        <div className="flex flex-col gap-6 items-center mt-20 lg:flex-row lg:items-start lg:justify-center">
          {pricingTiers.map(
            (
              { title, monthlyPrice, buttonText, popular, inverse, features },
              index
            ) => (
              <div
                key={title}
                className={twMerge(
                  "p-10 border border-[#F1F1F1] rounded-3xl shadow-[0_8px_16px_#EAEAEA] max-w-xs w-full",
                  inverse === true && "border-black bg-black text-white"
                )}
              >
                <div className="flex justify-between">
                  <h3
                    className={twMerge(
                      "text-lg font-bold text-black/50",
                      inverse === true && "text-white/50"
                    )}
                  >
                    {title}
                  </h3>

                  {popular === true && (
                    <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                      <motion.span
                        className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] [background-size:200%] text-transparent bg-clip-text font-medium"
                        animate={{ backgroundPositionX: "100%" }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "linear",
                          repeatType: "loop",
                        }}
                      >
                        Popular
                      </motion.span>
                    </div>
                  )}
                </div>

                <div className="flex items-baseline gap-1 mt-8">
                  <span className="text-4xl font-bold tracking-tighter leading-none">
                    £{monthlyPrice}
                  </span>
                  <span
                    className={twMerge(
                      "tracking-tight font-bold text-black/50",
                      inverse === true && "text-white/50"
                    )}
                  >
                    /month
                  </span>
                </div>

                <button
                  className={twMerge(
                    "btn btn-primary w-full mt-8",
                    inverse === true && "btn-inverse"
                  )}
                >
                  {buttonText}
                </button>
                
                <ul className="flex flex-col gap-5 mt-8">
                  {features.map((feature) => (
                    <li
                      key={feature}
                      className="text-sm flex items-center gap-4"
                    >
                      <CheckIcon className="h-6 w-6" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};