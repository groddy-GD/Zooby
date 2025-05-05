import { useState } from "react";
import ProgressBar from "../../components/Onboarding/ProgressBar";
import StepOne from "../../components/Onboarding/StepOne";
import StepTwo from "../../components/Onboarding/StepTwo";
import StepThree from "../../components/Onboarding/StepThree";
import StepFour from "../../components/Onboarding/StepFour";
import images from "../../data/Onboarding/images";

const Onboarding = () => {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 0) setStep(step - 1);
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen w-full">
      {/* Left Column - Image (Hidden on small screens) */}
      <div className="hidden lg:flex w-1/2 bg-gray-200 items-center justify-center">
        <img src={images[step]} alt="Step" className="w-3/4 h-auto" />
      </div>

      {/* Right Column - Form */}
      <div className="w-full lg:w-1/2 p-6 flex flex-col justify-between relative">
        {/* Progress Bar */}
        <div className="sticky top-0 bg-white z-10 py-4">
          <ProgressBar step={step} />
        </div>

        {/* Form Steps */}
        <div className="flex-grow flex items-center justify-start">
          {step === 0 && <StepOne nextStep={nextStep} />}
          {step === 1 && <StepTwo nextStep={nextStep} prevStep={prevStep} />}
          {step === 2 && <StepThree nextStep={nextStep} prevStep={prevStep} />}
          {step === 3 && <StepFour prevStep={prevStep} />}
        </div>

        {/* Navigation Buttons */}
       
        
      </div>
    </div>
  );
};

export default Onboarding;
