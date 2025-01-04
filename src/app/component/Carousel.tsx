import React from "react";
import Image from "next/image";

export default function Carousel() {
  return (
    <div>
      <section className="bg-gradiant-to-r from-black to-grey-700">
        <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-5 gap-4 h-full">
            <div className="col-span-2 sm:col-1 md:col-span-2 bg-gradiant-to-r from-black to-grey-700 h-auto md:h-full flex flex-col">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <Image
                  src="https://th.bing.com/th/id/OIP.whxJyvOFUxVXA4YjWmy-TwHaE8?w=298&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                  alt="Pizza 1"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-grey-900/25 to-grey-900/5"></div>
                <h3 className="z-10 text-2xl font-serif text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                  Chicken Fajita{" "}
                </h3>
              </a>
            </div>

            <div className="col-span-2 sm:col-1 md:col-span-2 bg-gradient-to-r from-black to-grey-700 h-auto md:h-full flex flex-col">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4"
              >
                <Image
                  src="https://www.mashed.com/img/gallery/fast-food-hot-dogs-that-completely-disappeared-from-menus/hot-dog-bites-pizza-pizza-hut-1678292808.jpg"
                  alt="Pizza 2"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-grey-900/25 to-grey-900/5"></div>
                <h3 className="z-10 text-2xl font-serif text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                  Cheese Stuffed Pizza{" "}
                </h3>
              </a>
              <div className="grid gap-4 grid-cols-2 lg:grid-cols-2">
                <a
                  href=""
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <Image
                    src="https://th.bing.com/th/id/OIP.8zsxQ53TYvw3Uux3VuQwjgAAAA?rs=1&pid=ImgDetMain"
                    alt="Pizza 3"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradiant-to-b from-grey-900/25 to-grey-900/5"></div>
                  <h3 className="z-10 text-2xl font-serif text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl ">
                    Chicken Supreme{" "}
                  </h3>
                </a>

                <a
                  href=""
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <Image
                    src="https://bluebowlrecipes.com/wp-content/uploads/2019/05/barbecue-chicken-pizza-0917.jpg"
                    alt="Pizza 4"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradiant-to-b from-grey-900/25 to-grey-900/5"></div>
                  <h3 className="z-10 text-2xl font-serif text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl ">
                    BBQ Chicken Pizza{" "}
                  </h3>
                </a>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-2 md:col-span-1 bg-gradient-to-r from-black to-gray-700 h-auto md:h-full flex flex-col">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
              >
                <Image
                  src="https://cdn.pixabay.com/photo/2023/04/30/21/34/pizza-7961604_640.jpg"
                  alt="Pizza 5"
                  className=" inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradiant-to-b from-grey-900/25 to-grey-900/5"></div>
                <h3 className="z-10 text-2xl font-serif text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl ">
                  {" "}
                  Italian Thin Crust Pizza{" "}
                </h3>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
