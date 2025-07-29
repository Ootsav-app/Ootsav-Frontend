import { useState } from "react";
import { GoArrowLeft } from "react-icons/go";

type Option = { src: string; label: string };

const inputStyle =
  "w-full mb-3 px-4 py-3 border border-gray-300 rounded-xl text-sm md:text-base bg-white";

export default function GuestRSVP_Selected() {
  const [selected, setSelected] = useState({
    rsvp: "",
    guest: "",
    food: "",
    alcohol: [] as string[],
    date: [] as string[],
  });

  const toggleSingle = (category: "rsvp" | "guest" | "food", label: string) => {
    setSelected((prev) => ({
      ...prev,
      [category]: prev[category] === label ? "" : label,
    }));
  };

  const toggleMulti = (category: "alcohol" | "date", label: string) => {
    setSelected((prev) => {
      const current = prev[category];
      const exists = current.includes(label);
      return {
        ...prev,
        [category]: exists
          ? current.filter((l) => l !== label)
          : [...current, label],
      };
    });
  };

  const isSelected = (category: keyof typeof selected, label: string) => {
    const value = selected[category];
    return Array.isArray(value) ? value.includes(label) : value === label;
  };

  const bordered = (category: keyof typeof selected, label: string) =>
    isSelected(category, label) ? "border-red-500" : "border-gray-300";

  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center">
      <div
        className="w-full min-h-[50vh] bg-cover bg-center bg-no-repeat bg-[#272938]"
        style={{ backgroundImage: 'url("back1.svg")' }}
      />

      <div className="-mt-90 w-full px-4 md:px-8 flex flex-col items-center">
        <div className="flex items-center w-full max-w-2xl text-white mb-2 px-4 md:px-10">
          <button className="rounded-full p-2 mr-3 bg-white/20">
            <GoArrowLeft className="w-6 h-6 md:w-7 md:h-7" />
          </button>
          <span className="text-lg md:text-xl font-medium">Event Overview</span>
        </div>

        <p className="text-white mb-6 text-sm md:text-base text-center max-w-2xl">
          Please share these details to help us plan better!
        </p>

        <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl min-w-[342px] mx-auto rounded-xl shadow-md px-4 py-6 space-y-8 overflow-hidden md:px-10 md:py-12 bg-gradient-to-t from-[#fdcfc8] to-white">
          <div className="relative z-10">
            <h2 className="text-sm font-semibold text-gray-700 mb-2">
              Personal Details
            </h2>
            <input type="text" placeholder="Name*" className={inputStyle} />
            <input
              type="tel"
              placeholder="Phone Number*"
              className={inputStyle}
            />
            <input type="email" placeholder="Email Id" className={inputStyle} />
            <textarea
              placeholder="Personal Note"
              rows={2}
              className={inputStyle}
            />
          </div>
          <Category
            title="RSVP Status"
            options={[
              { src: "tick.svg", label: "Attending" },
              { src: "cross.svg", label: "Not Attending" },
              { src: "maybe.svg", label: "Maybe" },
            ]}
            selected={selected.rsvp}
            onSelect={(label) => toggleSingle("rsvp", label)}
          />
          <Category
            title="Additional Guest Count"
            options={[
              { src: "+1.svg", label: "+1" },
              { src: "+2.svg", label: "+2" },
              { src: "family.svg", label: "Family" },
            ]}
            selected={selected.guest}
            onSelect={(label) => toggleSingle("guest", label)}
          />

          <Category
            title="Food Preference"
            options={[
              { src: "veg.svg", label: "Veg" },
              { src: "nonveg.svg", label: "Non-Veg" },
              { src: "vn.svg", label: "Anything" },
            ]}
            selected={selected.food}
            onSelect={(label) => toggleSingle("food", label)}
          />
          <Category
            title="Alcohol Preference"
            options={[
              { src: "Wine.svg", label: "Wine" },
              { src: "gin.svg", label: "Gin" },
              { src: "vodka.svg", label: "Vodka" },
              { src: "beer.svg", label: "Beer" },
            ]}
            selected={selected.alcohol}
            onSelect={(label) => toggleMulti("alcohol", label)}
            gridCols="grid-cols-4"
            isMulti
          />

          <div className="w-full">
            <h2 className="text-sm font-semibold text-gray-700 mb-2 pl-2">
              Accommodation Required
            </h2>

            <div className="grid grid-cols-5 gap-2 px-2">
              {["25th", "26th", "27th", "28th", "29th"].map((day) => (
                <div
                  key={day}
                  onClick={() => toggleMulti("date", day)}
                  className={`relative flex flex-col items-center justify-center px-7 py-4 rounded-xl border ${bordered(
                    "date",
                    day
                  )} text-[10px] sm:text-xs md:text-sm bg-white cursor-pointer`}
                >
                  <div
                    className="absolute top-1 left-1 w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-contain bg-no-repeat bg-center" // Adjusted size and position
                    style={{ backgroundImage: 'url("date.svg")' }}
                  />

                  <span className="mt-5 text-[10px] sm:text-xs text-center font-medium">
                    {day} Aug
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mt-6 mx-auto pb-10">
          <button className="w-full bg-[#ef4444] text-white py-3 rounded-xl font-bold text-lg md:text-xl">
            SAVE
          </button>
        </div>
      </div>
    </div>
  );
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
      <h2 className="text-sm font-semibold text-gray-700 mb-2">{title}</h2>
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
            <span className="text-xs md:text-sm text-center w-full whitespace-nowrap">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
