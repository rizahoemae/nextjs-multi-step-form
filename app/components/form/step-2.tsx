"use client";
import { useState } from "react";
export default function StepOne() {
  const plans = [
    {
      title: "Arcade",
      icon: "",
      monthly: "9",
      yearly: "90",
      color: "primary-pastel-blue",
      textColor: "black",
    },
    {
      title: "Advanced",
      icon: "",
      monthly: "12",
      yearly: "120",
      color: "primary-strawberry-red",
      textColor: "black",
    },
    {
      title: "Pro",
      icon: "",
      monthly: "15",
      yearly: "150",
      color: "primary-marine-blue",
      textColor: "white",
    },
  ];

  const [isMonthly, setIsMonthly] = useState(false);
  return (
    <>
      <div className="mb-3">
        <h1 className="text-primary-marine-blue">Select your plan</h1>
        <p className="text-neutral-light-year">
          You have the option of monthly or yearly billing.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {plans.map((item, idx) => (
          <div
            key={idx}
            className="p-3 rounded-md border relative h-36 flex flex-col"
          >
            <div>
              <div
                className={`bg-${item.color} p-3 rounded-full w-fit text-${item.textColor}`}
              >
                sss
              </div>
            </div>
            <div className="absolute bottom-3">
              <p className="text-primary-marine-blue font-medium">
                {item.title}
              </p>
              <p className="text-neutral-cool-gray">
                ${item.monthly}/{isMonthly ? "yr" : "mo"}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-neutral-magnolia p-3 w-full font-medium rounded-md flex justify-center">
        <label className="inline-flex items-center cursor-pointer">
          <span
            className={`${
              isMonthly ? "" : "font-medium text-primary-marine-blue"
            }  me-3 text-sm font-medium`}
          >
            Monthly
          </span>
          <input
            type="checkbox"
            className="sr-only peer"
            checked={isMonthly}
            onChange={(e) => setIsMonthly(e.target.checked)}
          />
          <div className="relative w-11 h-6 bg-primary-marine-blue peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-pastel-blue rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-marine-blue"></div>
          <span className={`{'font-medium text-primary-marine-blue' }ms-3 text-sm font-medium text-gray-900`}>
            Yearly
          </span>
        </label>
      </div>
    </>
  );
}
