import { useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import GuestRSVP from "../components/GuestRSVP";

type Option = { src: string; label: string };

const inputStyle =
  "w-full mb-3 px-4 py-3 border border-gray-300 rounded-xl text-sm md:text-base bg-white";

export default function GuestRSVP_Selected() {
  // const [selected, setSelected] = useState({
  //   rsvp: "",
  //   guest: "",
  //   food: "",
  //   alcohol: [] as string[],
  //   date: [] as string[],
  // });

  // const toggleSingle = (category: "rsvp" | "guest" | "food", label: string) => {
  //   setSelected((prev) => ({
  //     ...prev,
  //     [category]: prev[category] === label ? "" : label,
  //   }));
  // };

  // const toggleMulti = (category: "alcohol" | "date", label: string) => {
  //   setSelected((prev) => {
  //     const current = prev[category];
  //     const exists = current.includes(label);
  //     return {
  //       ...prev,
  //       [category]: exists
  //         ? current.filter((l) => l !== label)
  //         : [...current, label],
  //     };
  //   });
  // };

  // const isSelected = (category: keyof typeof selected, label: string) => {
  //   const value = selected[category];
  //   return Array.isArray(value) ? value.includes(label) : value === label;
  // };

  // const bordered = (category: keyof typeof selected, label: string) =>
  //   isSelected(category, label) ? "border-red-500" : "border-gray-300";

  // return (
  //   <div className="flex flex-col items-center w-full min-h-screen bg-white">
  //     <div
  //       className="w-full min-h-[50vh] bg-cover bg-center bg-no-repeat bg-[#272938]"
  //       style={{ backgroundImage: 'url("back1.svg")' }}
  //     />

  //     <div className="flex flex-col items-center w-full px-4 -mt-90 md:px-8">
  //       <div className="flex items-center w-full max-w-2xl px-4 mb-2 text-white md:px-10">
  //         <button className="p-2 mr-3 rounded-full bg-white/20">
  //           <GoArrowLeft className="w-6 h-6 md:w-7 md:h-7" />
  //         </button>
  //         <span className="text-lg font-medium md:text-xl">Event Overview</span>
  //       </div>

  //       <p className="max-w-2xl mb-6 text-sm text-center text-white md:text-base">
  //         Please share these details to help us plan better!
  //       </p>

  //       <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl min-w-[342px] mx-auto rounded-xl shadow-md px-4 py-6 space-y-8 overflow-hidden md:px-10 md:py-12 bg-gradient-to-t from-[#fdcfc8] to-white">
  //         <div className="relative z-10">
  //           <h2 className="mb-2 text-sm font-semibold text-gray-700">
  //             Personal Details
  //           </h2>
  //           <input type="text" placeholder="Name*" className={inputStyle} />
  //           <input
  //             type="tel"
  //             placeholder="Phone Number*"
  //             className={inputStyle}
  //           />
  //           <input type="email" placeholder="Email Id" className={inputStyle} />
  //           <textarea
  //             placeholder="Personal Note"
  //             rows={2}
  //             className={inputStyle}
  //           />
  //         </div>
  //         <Category
  //           title="RSVP Status"
  //           options={[
  //             { src: "tick.svg", label: "Attending" },
  //             { src: "cross.svg", label: "Not Attending" },
  //             { src: "maybe.svg", label: "Maybe" },
  //           ]}
  //           selected={selected.rsvp}
  //           onSelect={(label) => toggleSingle("rsvp", label)}
  //         />
  //         <Category
  //           title="Additional Guest Count"
  //           options={[
  //             { src: "+1.svg", label: "+1" },
  //             { src: "+2.svg", label: "+2" },
  //             { src: "family.svg", label: "Family" },
  //           ]}
  //           selected={selected.guest}
  //           onSelect={(label) => toggleSingle("guest", label)}
  //         />

  //         <Category
  //           title="Food Preference"
  //           options={[
  //             { src: "veg.svg", label: "Veg" },
  //             { src: "nonveg.svg", label: "Non-Veg" },
  //             { src: "vn.svg", label: "Anything" },
  //           ]}
  //           selected={selected.food}
  //           onSelect={(label) => toggleSingle("food", label)}
  //         />
  //         <Category
  //           title="Alcohol Preference"
  //           options={[
  //             { src: "Wine.svg", label: "Wine" },
  //             { src: "gin.svg", label: "Gin" },
  //             { src: "vodka.svg", label: "Vodka" },
  //             { src: "beer.svg", label: "Beer" },
  //           ]}
  //           selected={selected.alcohol}
  //           onSelect={(label) => toggleMulti("alcohol", label)}
  //           gridCols="grid-cols-4"
  //           isMulti
  //         />

  //         <div className="w-full">
  //           <h2 className="pl-2 mb-2 text-sm font-semibold text-gray-700">
  //             Accommodation Required
  //           </h2>

  //           <div className="grid grid-cols-5 gap-2 px-2">
  //             {["25th", "26th", "27th", "28th", "29th"].map((day) => (
  //               <div
  //                 key={day}
  //                 onClick={() => toggleMulti("date", day)}
  //                 className={`relative flex flex-col items-center justify-center px-7 py-4 rounded-xl border ${bordered(
  //                   "date",
  //                   day
  //                 )} text-[10px] sm:text-xs md:text-sm bg-white cursor-pointer`}
  //               >
  //                 <div
  //                   className="absolute w-5 h-5 bg-center bg-no-repeat bg-contain top-1 left-1 sm:w-5 sm:h-5 md:w-6 md:h-6" // Adjusted size and position
  //                   style={{ backgroundImage: 'url("date.svg")' }}
  //                 />

  //                 <span className="mt-5 text-[10px] sm:text-xs text-center font-medium">
  //                   {day} Aug
  //                 </span>
  //               </div>
  //             ))}
  //           </div>
  //         </div>
  //       </div>

  //       <div className="w-full max-w-md pb-10 mx-auto mt-6 sm:max-w-lg md:max-w-xl lg:max-w-2xl">
  //         <button className="w-full bg-[#ef4444] text-white py-3 rounded-xl font-bold text-lg md:text-xl">
  //           SAVE
  //         </button>
  //       </div>
  //     </div>
  //   </div>
  // );
  return <GuestRSVP />;
}

function Category({
  title,
  options,
  selected,
  onSelect,
  gridCols = "grid-cols-3",
  isMulti = false,
}: {
  title: string;
  options: Option[];
  selected: string | string[];
  onSelect: (label: string) => void;
  gridCols?: string;
  isMulti?: boolean;
}) {
  const isSelected = (label: string) =>
    Array.isArray(selected) ? selected.includes(label) : selected === label;

  return (
    <div className="relative z-10">
      <h2 className="mb-2 text-sm font-semibold text-gray-700">{title}</h2>
      <div className={`grid ${gridCols} gap-3`}>
        {options.map(({ src, label }) => (
          <div
            key={label}
            onClick={() => onSelect(label)}
            className={`flex flex-col items-center justify-center p-3 rounded-xl border ${
              isSelected(label) ? "border-red-500" : "border-gray-300"
            } bg-white text-sm cursor-pointer`}
          >
            <img
              src={src}
              alt={label}
              className={`${
                label === "Anything" ? "w-10 h-10" : "w-8 h-8"
              } mb-1 md:w-10 md:h-10`}
            />
            <span className="w-full text-xs text-center md:text-sm whitespace-nowrap">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
