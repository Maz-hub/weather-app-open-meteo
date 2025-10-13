import Logo from "../assets/images/logo.svg";
import DropdownIcon from "../assets/images/icon-dropdown.svg";
import UnitsIcon from "../assets/images/icon-units.svg";

const HeaderSearch = () => {
  return (
    <section className="flex justify-between items-center">
      <div>
        <img src={Logo} alt="Logo" />
      </div>
      <div className="flex items-center px-2.5 py-2 bg-Neutral-800 rounded-md">
        <img
          src={UnitsIcon}
          alt="Gear Icon for Units search"
          className="w-3.5 h-3.5 "
        />
        <p className="text-preset-8 text-[var(--color-Neutral-0)] mx-1.5">
          Units
        </p>
        <img
          src={DropdownIcon}
          alt="Dropdown Icon for Units search"
          className="w-[9px] h-3.5 cursor-pointer"
        />
      </div>
    </section>
  );
};

export default HeaderSearch;
