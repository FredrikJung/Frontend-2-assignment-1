import { useState } from "react";

const AddForm = ({ onAdd }) => {
  const [activityText, setActivityText] = useState("");
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [category, setCategory] = useState("Hushåll");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!activityText) {
      alert("Var god ange namn för aktiviteten");
      return;
    }

    onAdd({ activityText, date, category });

    setActivityText("");
    setDate(new Date().toLocaleDateString());
    setCategory("Hushåll");
  };

  const onKeyUp = (e) => {
    e.preventDefault();

    if (!activityText) {
      alert("Var god ange namn för aktiviteten");
      return;
    }

    if (e.key === "Enter") {
      onAdd({ activityText, date, category });
      setActivityText("");
      setDate(new Date().toLocaleDateString());
      setCategory("Hushåll");
    }
  };

  return (
    <div className="add-form-box" onSubmit={onSubmit}>
      <label htmlFor="inputName">Ange aktivitetens namn</label>
      <input
        maxLength={20}
        id="inputName"
        type="text"
        value={activityText}
        onChange={(e) => setActivityText(e.target.value)}
        onKeyUp={onKeyUp}
      />
      <div className="date-category-container">
        <div className="date-box">
          <label htmlFor="inputDate">Aktivitetens datum</label>
          <input
            id="inputDate"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="category-box">
          <label htmlFor="categories">Välj kategori</label>
          <select
            name="categories"
            id="categories"
            value={category}
            onChange={(e) => {
              const selectedCategory = e.target.value;
              setCategory(selectedCategory);
            }}
          >
            <option value="Hushåll">Hushåll</option>
            <option value="Jobb">Jobb</option>
            <option value="Studier">Studier</option>
            <option value="Fritid">Fritid</option>
          </select>
        </div>
      </div>
      <div className="button-box">
        <button onClick={onSubmit} className="add-button">
          Lägg till
        </button>
      </div>
    </div>
  );
};

export default AddForm;
