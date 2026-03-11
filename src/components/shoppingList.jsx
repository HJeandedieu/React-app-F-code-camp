import { useState, useMemo, useCallback } from "react";


let prevToggleItem = null;

export const ShoppingList = () => {
  const [query, setQuery] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [add, setAdd] = useState("");
  const [items, setItems] = useState([
    "🍎Apples",
    "🍌Bananas",
    "🍓Strawberries",
    "🫐Blueberries",
    "🥭Mangoes",
    "🍍Pineapple",
    "🥬Lettuce",
    "🥦Broccoli",
    "🧻Paper Towels",
    "🧴Dish Soap",
  ]);

  const filteredItems = useMemo(() => {
    console.log("Filtering items...");
    return items.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase()),
    );
  }, [query, items]);


  // ADD NEW LIST ELEMENT
  function handleSubmit(e){
    e.preventDefault();
    setItems(prev => [...prev, add]);
    setAdd("");
  }


  const toggleItem = useCallback(
    (item) => {
      setSelectedItems((prev) =>
        prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item],
      );
    },
    [setSelectedItems],
  );

  if (prevToggleItem !== toggleItem) {
    console.log("New toggleItem function");
    prevToggleItem = toggleItem;
  } else {
    console.log("Current toggleItem function");
  }

  return (
    <div className="Shopcontainer">
      <div className="intro-text">
        <h1>Shopping List</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search for an item:</label><br />
        <input
          id="search"
          type="search"
          placeholder="Search..."
          aria-describedby="search-description"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <p id="search-description">Type to filter the list below:</p>
        <ul>
          {filteredItems.map((item) => {
            const isChecked = selectedItems.includes(item);
            return (
              <li
                key={item}
                style={{ textDecoration: isChecked ? "line-through" : "none" }}
              >
                <label>
                  <input
                    type="checkbox"
                    onChange={() => toggleItem(item)}
                    checked={isChecked}
                  />
                  {item}
                </label>
              </li>
            );
          })}
        </ul>

        <input 
          type="text" 
          name="add" 
          value={add}
          placeholder="Add a new item..."
          onChange={e=>setAdd(e.target.value)}
           />
        <button 
          id="addBtn"
          type="submit"
        >+</button>
      </form>
    </div>
  );
};
