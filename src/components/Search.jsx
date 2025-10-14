import SearchIcon from "../assets/images/icon-search.svg";

const Search = () => {
  return (
    <section className="flex flex-col">
      <form role="search" className="flex flex-col md:flex-row gap-3 w-full">
        <div className="flex items-center py-4 px-6 rounded-xl bg-[var(--color-Neutral-800)] w-full md:flex-1">
          <img src={SearchIcon} alt="" aria-hidden="true" className="mr-3" />
          {/* keep a hidden label for a11y */}
          <label htmlFor="q" className="sr-only">
            Search for a place...
          </label>
          <input
            id="q"
            type="search"
            placeholder="Search for a place…"
            className="text-preset-5-medium text-[var(--color-Neutral-200)] bg-transparent placeholder:text-[var(--color-Neutral-300)] w-full focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="py-4 px-6 rounded-xl text-[var(--color-Neutral-0)] bg-[var(--color-Blue-500)] text-center w-full md:w-auto mt-3 md:mt-0"
        >
          Search
        </button>
      </form>
    </section>
  );
};

export default Search;
