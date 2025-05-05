const ProgressBar = ({ step }) => {
    const steps = ["Linking Account", "Basic info", "About content", "Questionaries"];
  
    return (
      <div className="w-full flex flex-col items-center">
        {/* Step Labels */}
        <div className="flex justify-between w-full text-xs sm:text-sm font-medium text-gray-600 mb-2">
          {steps.map((label, index) => (
            <span key={index} className={`w-1/4 text-center ${index <= step ? "text-black " : ""}`}>
              {label}
            </span>
          ))}
        </div>
  
        {/* Progress Line with Circles */}
        <div className="relative flex items-center w-full">
          <div className="absolute w-full h-1 bg-gray-300"></div>
          <div className="absolute h-1 bg-blue-600" style={{ width: `${(step / 3) * 100}%` }}></div>
  
          {steps.map((_, index) => (
            <div key={index} className="relative w-1/4 flex justify-center">
              <div className={`w-6 h-6 flex items-center justify-center rounded-full border-2 text-sm
                ${index <= step ? "bg-blue-600 border-blue-600 text-white" : "bg-white border-gray-400 text-gray-600"}`}>
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ProgressBar;
  