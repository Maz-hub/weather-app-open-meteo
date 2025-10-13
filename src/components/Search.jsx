import SearchIcon from "../assets/images/icon-search.svg";

const Search = () => {
  return (
    <section>
      <form
        role="search"
        className="flex flex-col gap-3 sm:flex-row sm:items-center"
      >
        <div className="flex items-center py-4 px-6 rounded-xl bg-[var(--color-Neutral-800)]">
          <img src={SearchIcon} alt="" aria-hidden="true" className="mr-3" />
          {/* keep a hidden label for a11y */}
          <label htmlFor="q" className="sr-only">
            Search for a place...
          </label>
          <input
            id="q"
            type="search"
            placeholder="Search for a place…"
            className="text-preset-5-medium text-[var(--color-Neutral-200)] bg-transparent placeholder:text-[var(--color-Neutral-300)] w-full focus:outline-none sm:flex-grow"
          />
        </div>

        <button
          type="submit"
          className="py-4 px-6 rounded-xl text-[var(--color-Neutral-0)] bg-[var(--color-Blue-500)] text-center sm:shrink-0 sm:self-start sm:px-5 sm:py-3"
        >
          Search
        </button>
      </form>
    </section>
  );
};

export default Search;
