import Logo from "../assets/images/logo.svg";
import DropdownIcon from "../assets/images/icon-dropdown.svg";
import UnitsIcon from "../assets/images/icon-units.svg";

const HeaderSearch = () => {
  return (
    <section className="flex justify-between items-center">
      <div>
        <img src={Logo} alt="Logo" />
      </div>
      <div className="flex items-center px-2.5 md:py-3 py-2 md:px-4 bg-Neutral-800 rounded-md">
        <img
          src={UnitsIcon}
          alt="Gear Icon for Units search"
          className="w-3.5 md:w-4 h-3.5 md:h-4"
        />
        <p className="text-preset-8 text-[var(--color-Neutral-0)] mx-1.5 md:mx-2.5">
          Units
        </p>
        <img
          src={DropdownIcon}
          alt="Dropdown Icon for Units search"
          className="w-[9px] md:w-3 h-3.5 md:h-4.5 cursor-pointer"
        />
      </div>
    </section>
  );
};

export default HeaderSearch;
