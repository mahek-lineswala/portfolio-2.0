import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function Education() {
  return (
    <div className="flex flex-col gap-2 items-center text-white">
      
      <div className="w-[250px] h-[250px]">
        <DotLottieReact
          src="https://lottie.host/1671fa5f-fbdf-4fb5-8920-db32418e7e38/fhO1RkrCAe.lottie"
          loop
          autoplay
        />
      </div>

      <div className="w-full space-y-4">
        <div className="border-b border-gray-600 p-4 text-left">
            <div className="flex gap-4 flex-col sm:flex-row justify-between">
              <p className="text-md font-bold">Sardar Vallabhbhai Patel Institute of Technology, Vasad</p>
              <em>Sept 2022 - June 2026</em>
            </div>
            <div className="text-md text-gray-300 mt-2">
              <p>Bachelor of Engineering, Computer Science and Design</p>
              <p>Current CGPA: 9.13</p>
            </div>
        </div>

        <div className="border-b border-gray-600 p-4 text-left">
            <div className="flex gap-4 flex-col sm:flex-row justify-between">
              <p className="text-md font-bold">Bright Day School (Class 12th, CBSE)</p>
              <em>2022</em>
            </div>
            <div className="text-md text-gray-300 mt-2">
              <p>Grade: 86%</p>
            </div>
          
        </div>

        <div className="border-b border-gray-600 p-4 text-left"> 
            <div className="flex gap-4 flex-col sm:flex-row justify-between">
              <p className="text-md font-bold">Bright Day School (Class 10th, CBSE)</p>
              <em>2020</em>
            </div>
            <div className="text-md text-gray-300 mt-2">
              <p>Grade: 88%</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
