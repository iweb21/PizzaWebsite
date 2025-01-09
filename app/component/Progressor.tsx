// //import React, { Component } from "react";
// import React from "react";

// export default function Progessor() {
//   return (
//     <div>
//       <div className="flex items-start max-w-screen-lg w-full mx-auto mt-10">
//         <div className="w-full">
//           <div className="flex items-center w-full">
//             <div className="w-8 h-8 shrink-0 mx[-1px] bg-amber-400 p-1.5 flex items-center justify-center rounded-full">
//               <span className="text-base text-black font-bold ">1</span>
//             </div>
//             <div className="w-full h-1 mx-4 rounded-lg bg-blue-500"></div>
//           </div>

//           <div className="mt-2 mr-4">
//             <h6 className="text-base font-bold text-amber-500">
//               Step:1 Pick the Tempting Pizza{" "}
//             </h6>
//             <p className="text-xs text-white">
//               Explore our delicious menu and select your favourite meal!.
//             </p>
//           </div>
//         </div>

//         <div className="w-full">
//           <div className="flex items-center w-full">
//             <div className="w-8 h-8 shrink-0 mx[-1px] bg-amber-400 p-1.5 flex items-center justify-center rounded-full">
//               <span className="text-base text-black font-bold ">2</span>
//             </div>
//             <div className="w-full h-1 mx-4 rounded-lg bg-blue-500"></div>
//           </div>

//           <div className="mt-2 mr-4">
//             <h6 className="text-base font-bold text-amber-500">
//               Step:2 Customize Your Order{" "}
//             </h6>
//             <p className="text-xs text-white">
//               Tailor your meal to your taste!.
//             </p>
//           </div>
//         </div>

//         <div className="w-full">
//           <div className="flex items-center w-full">
//             <div className="w-8 h-8 shrink-0 mx[-1px] bg-amber-400 p-1.5 flex items-center justify-center rounded-full">
//               <span className="text-base text-black font-bold ">3</span>
//             </div>
//             <div className="w-full h-1 mx-4 rounded-lg bg-blue-500"></div>
//           </div>

//           <div className="mt-2 mr-4">
//             <h6 className="text-base font-bold text-amber-500">
//               Step:3 Place Your Order{" "}
//             </h6>
//             <p className="text-xs text-white">
//               Ready to eat ?Proceed to checkout and complete your order!
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";

interface StepProps {
  stepNumber: number;
  title: string;
  description: string;
  isActive: boolean;
}

const Step: React.FC<StepProps> = ({ stepNumber, title, description, isActive }) => (
  <div className="w-full">
    <div className="flex items-center w-full">
      <div
        className={`w-8 h-8 shrink-0 mx[-1px] p-1.5 flex items-center justify-center rounded-full ${
          isActive ? "bg-amber-400" : "bg-gray-300"
        }`}
      >
        <span className="text-base text-black font-bold">{stepNumber}</span>
      </div>
      <div className={`w-full h-1 mx-4 rounded-lg ${isActive ? "bg-blue-500" : "bg-gray-300"}`}></div>
    </div>

    <div className="mt-2 mr-4">
      <h6 className="text-base font-bold text-amber-500">{title}</h6>
      <p className="text-xs text-white">{description}</p>
    </div>
  </div>
);

export default function Progessor() {
  const steps = [
    {
      stepNumber: 1,
      title: "Pick the Tempting Pizza",
      description: "Explore our delicious menu and select your favourite meal!",
    },
    {
      stepNumber: 2,
      title: "Customize Your Order",
      description: "Tailor your meal to your taste!",
    },
    {
      stepNumber: 3,
      title: "Place Your Order",
      description: "Ready to eat? Proceed to checkout and complete your order!",
    },
  ];

  return (
    <div>
      <div className="flex items-start max-w-screen-lg w-full mx-auto mt-10">
        {steps.map((step, index) => (
          <Step
            key={step.stepNumber}
            stepNumber={step.stepNumber}
            title={step.title}
            description={step.description}
            isActive={index === 0} // Only the first step is active by default
          />
        ))}
      </div>
    </div>
  );
}
