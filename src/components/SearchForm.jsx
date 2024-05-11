const SearchForm = ({ fetchFlights }) => {
  return (
    <form className="flex flex-col gap-3 my-3 text-sm lg:text-base lg:mx-10 xl:mx-40 accent-blue-700">
      <div className="flex flex-wrap items-center justify-between gap-2 ">
        <input
          placeholder="LHR"
          className="px-2 py-1 border border-black rounded lg:px-3 lg:py-2 max-w-44 focus-visible:border-none"
          required
        />

        <input
          placeholder="CDG"
          className="px-2 py-1 border border-black rounded lg:px-3 lg:py-2 max-w-44 focus-visible:border-none"
        />
        <input
          type="date"
          className="px-2 py-1 border border-black rounded lg:px-3 lg:py-2 max-w-44 focus-visible:border-none "
        />

        <select
          className="px-2 lg:px-3 py-[0.4rem] rounded lg:py-[0.65rem] bg-white border border-black max-w-44"
          name="day-neg"
          id="day-negative"
        >
          <option value="">Day -</option>
          <option value="-1">-1</option>
          <option value="-2">-2</option>
          <option value="-3">-3</option>
          <option value="-4">-4</option>
        </select>

        <select
          className="px-2 lg:px-3 py-[0.4rem] rounded lg:py-[0.65rem] bg-white border border-black max-w-44"
          name="day-pos"
          id="day-positive"
        >
          <option value="">Day +</option>
          <option value="+1">+1</option>
          <option value="+2">+2</option>
          <option value="+3">+3</option>
          <option value="+4">+4</option>
        </select>

        <select
          className="px-2 lg:px-3 py-[0.4rem] rounded lg:py-[0.65rem] bg-white border border-black grow max-w-52 "
          name="time"
          id="time"
        >
          <option value="">Any time</option>
          <option value="01:00">01:00</option>
          <option value="02:00">02:00</option>
          <option value="03:00">03:00</option>
          <option value="04:00">04:00</option>
        </select>

        <div className="font-bold lg:text-xl">+</div>

        <select
          className="px-2 lg:px-3 py-[0.4rem] rounded lg:py-[0.65rem] bg-white border border-black grow max-w-32 "
          name="cat"
          id="category"
        >
          <option value="ADT">ADT</option>
          <option value="CHD">CHD</option>
          <option value="INF">INF</option>
        </select>

        <select
          className="px-2 lg:px-3 py-[0.4rem] rounded lg:py-[0.65rem] bg-white border border-black grow max-w-32 "
          name="num"
          id="numbe"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>

        <div className="pr-8 font-bold lg:text-xl">+</div>
      </div>

      <hr className="bg-blue-500 h-[2px]" />

      <div className="flex items-center justify-between font-medium">
        <div className="flex gap-2">
          <input type="checkbox" id="options" name="options" />
          <label htmlFor="options">Extra options</label>
        </div>

        <div className="flex gap-2">
          <p>Environment</p>
          <input
            type="radio"
            id="dummy"
            name="environment"
            value="dummy"
            checked
          />
          <label htmlFor="dummy">Dummy</label>

          <input type="radio" id="PDT" name="environment" value="PDT" />
          <label htmlFor="PDT">PDT</label>
        </div>

        <button
          className="px-3 py-2 text-sm text-white uppercase bg-blue-900 rounded lg:px-5 lg:py-2 hover:bg-blue-950"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            fetchFlights();
          }}
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
