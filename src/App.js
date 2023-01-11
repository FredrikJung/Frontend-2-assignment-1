import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import AddForm from "./components/AddForm";
import Filter from "./components/Filter";
import Heading from "./components/Heading";
import TodoList from "./components/TodoList";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [listItems, setListItems] = useLocalStorage("react-todo.listItems", []);
  const [search, setNewSearch] = useState("");
  const [filteredCategories, setFilteredCategories] = useState(listItems);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.checked = true;
  }, []);

  //Filter ListItems by TextInput & Radiobuttons
  const handleSearchChange = (e) => {
    setNewSearch(e.target.value);
  };

  const radioChangeHandler = (e) => {
    const value = e.target.value;

    if (value === "Alla") {
      setFilteredCategories(listItems);
    } else if (value === "Hushåll") {
      setFilteredCategories(
        listItems.filter((listItem) => {
          if (listItem.category === "Hushåll") {
            return true;
          }
          return false;
        })
      );
    } else if (value === "Jobb") {
      setFilteredCategories(
        listItems.filter((listItem) => {
          if (listItem.category === "Jobb") {
            return true;
          }
          return false;
        })
      );
    } else if (value === "Studier") {
      setFilteredCategories(
        listItems.filter((listItem) => {
          if (listItem.category === "Studier") {
            return true;
          }
          return false;
        })
      );
    } else if (value === "Fritid") {
      setFilteredCategories(
        listItems.filter((listItem) => {
          if (listItem.category === "Fritid") {
            return true;
          }
          return false;
        })
      );
    }
  };

  const filtered =
    !search && !filteredCategories
      ? listItems
      : filteredCategories.filter((listItem) =>
          listItem.activityText.toLowerCase().includes(search.toLowerCase())
        );

  // Add ListItem
  const addListItem = (listItem) => {
    const id = Date.now();
    const newListItem = { id, ...listItem };
    setListItems([...listItems, newListItem]);
    inputRef.current.checked = true;
    setFilteredCategories([...listItems, newListItem]);
  };

  //Delete ListItem
  const deleteListItem = (id) => {
    setListItems(listItems.filter((listItem) => listItem.id !== id));
    setFilteredCategories(
      filteredCategories.filter((listItem) => listItem.id !== id)
    );
  };

  //Delete All ListItems
  const deleteAllListItem = (id) => {
    setListItems(listItems.filter((listItem) => listItem.id === id));
    setFilteredCategories(
      filteredCategories.filter((listItem) => listItem.id === id)
    );
  };

  return (
    <div className="container">
      <Header />
      <AddForm onAdd={addListItem} />
      <Filter
        search={search}
        handleSearchChange={handleSearchChange}
        radioChangeHandler={radioChangeHandler}
        ref={inputRef}
      />
      <Heading onDeleteAll={deleteAllListItem} />
      <TodoList filtered={filtered} onDelete={deleteListItem} />
    </div>
  );
}

export default App;
