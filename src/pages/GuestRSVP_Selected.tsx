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
    <div
      className="min-h-screen bg-cover bg-no-repeat bg-center flex flex-col items-center justify-start px-4 py-6 md:px-8"
      style={{ backgroundImage: 'url("/back.svg")' }}
    >
      <div className="flex items-center w-full max-w-xl text-white mb-2 px-2">
        <button className="rounded-full p-2 mr-3 bg-white/20">
          <GoArrowLeft className="w-6 h-6 md:w-7 md:h-7" />
        </button>
        <span className="text-lg md:text-xl font-medium">Event Overview</span>
      </div>

      <p className="text-white mb-6 text-sm md:text-base px-4 text-center max-w-xl">
        Please share these details to help us plan better!
      </p>

      {/* Form Card */}
      <div className="relative bg-[#fff5f8] w-full max-w-xl min-w-[342px] rounded-xl shadow-md px-4 py-6 space-y-8 overflow-hidden md:px-10 md:py-12">
        <div className="absolute inset-0 z-0 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-[#ffd4e2] to-white" />
        </div>

        {/* Personal Details */}
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

        {/* RSVP Status */}
        <Category
          title="RSVP Status"
          options={[
            { src: "/tick.svg", label: "Attending" },
            { src: "/cross.svg", label: "Not Attending" },
            { src: "/maybe.svg", label: "Maybe" },
          ]}
          selected={selected.rsvp}
          onSelect={(label) => toggleSingle("rsvp", label)}
        />

        {/* Guest Count */}
        <Category
          title="Additional Guest Count"
          options={[
            { src: "/+1.svg", label: "+1" },
            { src: "/+2.svg", label: "+2" },
            { src: "/family.svg", label: "+ Family" },
          ]}
          selected={selected.guest}
          onSelect={(label) => toggleSingle("guest", label)}
        />

        {/* Food Preference */}
        <Category
          title="Food Preference"
          options={[
            { src: "/veg.svg", label: "Veg" },
            { src: "/nonveg.svg", label: "Non-Veg" },
            { src: "/vn.svg", label: "Anything" },
          ]}
          selected={selected.food}
          onSelect={(label) => toggleSingle("food", label)}
        />

        {/* Alcohol*/}
        <Category
          title="Alcohol Preference"
          options={[
            { src: "/Wine.svg", label: "Wine" },
            { src: "/gin.svg", label: "Gin" },
            { src: "/vodka.svg", label: "Vodka" },
            { src: "/beer.svg", label: "Beer" },
          ]}
          selected={selected.alcohol}
          onSelect={(label) => toggleMulti("alcohol", label)}
          gridCols="grid-cols-4"
          isMulti
        />

        {/* Dates */}
        <div className="relative z-10">
          <h2 className="text-sm font-semibold text-gray-700 mb-2">
            Accommodation Required
          </h2>
          <div className="grid grid-cols-4 gap-3">
            {["25th", "26th", "27th", "28th"].map((day) => (
              <div
                key={day}
                onClick={() => toggleMulti("date", day)}
                className={`relative flex flex-col items-center justify-center py-12 px-2 rounded-xl border ${bordered(
                  "date",
                  day
                )} text-sm bg-white cursor-pointer`}
              >
                <div
                  className="absolute top-1 left-1 w-16 h-16 bg-contain bg-no-repeat bg-center"
                  style={{ backgroundImage: 'url("/date.svg")' }}
                />
                <span className="mt-6 whitespace-nowrap font-medium text-xs md:text-sm">
                  {day} Aug
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Save Button */}
        <div className="relative z-10">
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
            <span className="text-xs md:text-sm">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
