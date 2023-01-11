const ListItem = ({ listItem, onDelete }) => {
  const todayDate = new Date().toLocaleDateString();
  const itemDate =
    listItem.date >= todayDate ? (
      <span className="date-item">{listItem.date}</span>
    ) : (
      <span className="date-item outdated">{listItem.date}</span>
    );

  return (
    <div className="todo-list-item">
      <span className="activity-item"> {listItem.activityText}</span>
      {itemDate}
      <span className="category-item">{listItem.category}</span>
      <button className="remove-button" onClick={() => onDelete(listItem.id)}>
        Ta bort
      </button>
    </div>
  );
};

export default ListItem;
