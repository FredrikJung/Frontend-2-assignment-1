const Heading = ({ onDeleteAll }) => {
  return (
    <div className="header-2">
      <h2>Att göra lista:</h2>
      <div>
        <button className="delete-all-button" onClick={onDeleteAll}>
          Ta bort allt
        </button>
      </div>
    </div>
  );
};

export default Heading;
