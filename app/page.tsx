"use client";
import Image from "next/image";
import Sidebar from "./components/sidebar";
import Button from "./components/button";
import StepOne from "./components/form/step-1";
import StepTwo from "./components/form/step-2";
import { useState } from "react";
export default function Home() {
  const stepper = [
    { title: "Your Info" },
    { title: "Select Plan" },
    { title: "Add-Ons" },
    { title: "Summary" },
  ];

  const [currentStep, setCurrentStep] = useState(0);

  const next = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      setCurrentStep(0);
    }
  };
  const prev = () => {
    setCurrentStep(currentStep - 1);
  };
  return (
    <>
      <div className="items-center justify-center flex flex-col border border-black min-h-screen">
        <main className="flex items-center p-4 rounded-2xl bg-white w-1/2">
          <Sidebar>
            <div className="h-full flex justify-center w-full py-6">
              <ul className="flex flex-col space-y-6">
                {stepper.map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <button
                      onClick={() => setCurrentStep(idx)}
                      className={`rounded-full border-white border p-4 py-2 text-center ${
                        idx == currentStep
                          ? "bg-white text-primary-marine-blue"
                          : " text-white"
                      }`}
                    >
                      {idx + 1}
                    </button>
                    <div className="flex flex-col uppercase text-neutral-light-gray">
                      <p>Step {idx + 1}</p>
                      <p className="text-white font-medium">{item.title}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Sidebar>
          <div className="w-full">
            <div className="px-28 py-2 space-y-6">
              {currentStep == 0 && <StepOne />}
              {currentStep == 1 && <StepTwo />}
              <div className="flex justify-between items-center">
                {currentStep > 0 ? (
                  <button onClick={prev} className="text-neutral-cool-gray">
                    Go Back
                  </button>
                ) : (
                  <div></div>
                )}

                <Button onClick={next} label={"Next Step"} />
              </div>
            </div>
          </div>
        </main>
        <div className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Your Name Here</a>.
        </div>
      </div>
    </>
  );
}
