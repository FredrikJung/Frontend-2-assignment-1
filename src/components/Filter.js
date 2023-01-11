import React from "react";

const Filter = ({ search, handleSearchChange, radioChangeHandler }, ref) => {
  return (
    <div className="filter-box">
      <div className="filter-text-box">
        <label htmlFor="inputFilter">
          <strong>Filtrera på:</strong>
        </label>
        <input
          id="inputFilter"
          type="text"
          value={search}
          onChange={handleSearchChange}
        />
      </div>
      <div className="filter-radiobuttons-box">
        <input
          ref={ref}
          type="radio"
          id="all-button"
          name="filter-button"
          value="Alla"
          onChange={radioChangeHandler}
        />
        <label htmlFor="all-button">Alla</label>

        <input
          type="radio"
          id="houshold-button"
          name="filter-button"
          value="Hushåll"
          onChange={radioChangeHandler}
        />
        <label htmlFor="houshold-button">Hushåll</label>

        <input
          type="radio"
          id="work-button"
          name="filter-button"
          value="Jobb"
          onChange={radioChangeHandler}
        />
        <label htmlFor="work-button">Jobb</label>

        <input
          type="radio"
          id="studies-button"
          name="filter-button"
          value="Studier"
          onChange={radioChangeHandler}
        />
        <label htmlFor="studies-button">Studier</label>

        <input
          type="radio"
          id="sparetime-button"
          name="filter-button"
          value="Fritid"
          onChange={radioChangeHandler}
        />
        <label htmlFor="sparetime-button">Fritid</label>
      </div>
    </div>
  );
};

export default React.forwardRef(Filter);
