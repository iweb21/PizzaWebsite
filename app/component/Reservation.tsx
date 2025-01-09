// import React from "react";

// const ReservationSection = () => {
//   return (
//     <section className="bg-gradiant-to-r from-black to bg-slate-900 py-10">
//       <div className="container mx-auto text-center">
//         <h2 className="text-3xl font-bold mb-6 text-white">
//           Make a Reservation
//         </h2>
//         <form className="max-w-96 mx-auto">
//           <div className="mb-4 text-black">
//             <input
//               type="text"
//               placeholder="Your Name"
//               className="w-full p-3 border border-cyan-300 rounded-md"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <input
//               type="email"
//               placeholder="Your Email"
//               className="w-full p-3 border border-grey-300 rounded-md"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <input
//               type="date"
//               className="w-full p-3 border border-grey-300 rounded-md"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <input
//               type="time"
//               placeholder="Your Time"
//               className="w-full p-3 border border-grey-300 rounded-md"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-cyan-700">
//               Reserved Table
//             </button>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default ReservationSection;

import React from "react";

const ReservationSection = () => {
  return (
    <section className="bg-gradient-to-r from-black to-gray-900 py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-white">
          Make a Reservation
        </h2>
        <form className="max-w-96 mx-auto">
          <div className="mb-4 text-white">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-cyan-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="date"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="time"
              placeholder="Your Time"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
          </div>

          <div className="mb-4">
            <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500">
              Reserve Table
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ReservationSection;
