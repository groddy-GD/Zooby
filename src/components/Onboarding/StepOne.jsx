import InstagramLogin from "./InstagramLogin";

const StepOne = ({ nextStep }) => {
    return (
      <div className="w-full max-w-md px-2"> {/* Reduced left padding */}
      <p className="text-gray-600 text-sm mb-2">Social Media Linking</p>
      <h2 className="text-2xl font-bold mb-4">Instagram</h2>
      <InstagramLogin />
        
      <button
        onClick={nextStep}
        className="w-full bg-gray-700 text-white py-3 rounded"
      >
        Next
      </button>
        
      </div>
    );
  };
  
  export default StepOne;
  