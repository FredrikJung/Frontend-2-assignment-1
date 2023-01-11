import ListItem from "./ListItem";

const TodoList = ({ filtered, onDelete }) => {
  return (
    <div className="todo-list-container">
      <div className="todo-list-header">
        <span className="activity-header">Aktivitet</span>
        <span className="date-header">Datum</span>
        <span className="category-header">Kategori</span>
        <span className="empty-header">------</span>
      </div>
      <>
        {filtered.map((listItem) => (
          <ListItem key={listItem.id} listItem={listItem} onDelete={onDelete} />
        ))}
      </>
    </div>
  );
};

export default TodoList;
