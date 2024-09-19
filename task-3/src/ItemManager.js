import React, {
  useState,
  useContext,
  useEffect,
  useRef,
  useLayoutEffect,
} from "react";
import { ItemContext } from "./ItemContext";
import useItems from "./useItems";

const ItemManager = () => {
  const { state, dispatch } = useContext(ItemContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("name");
  const searchInputRef = useRef(null);

  useLayoutEffect(() => {
    searchInputRef.current.focus();
  }, []);

  useEffect(() => {
    console.log("Item list updated:", state);
  }, [state]);

  const sortedItems = useItems(state, searchTerm, sortOption);

  const handleAddItem = () => {
    if (!name || !description) {
      alert("value is null");
      return;
    }
    dispatch({
      type: "ADD_ITEM",
      payload: { id: Date.now(), name, description },
    });
    setName("");
    setDescription("");
  };

  const handleRemoveItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  return (
    <div className="container">
      <h1>Item Manager</h1>
      <div className="input-container">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <button onClick={handleAddItem}>Add Item</button>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search"
          ref={searchInputRef}
        />
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="name">Sort by Name</option>
          <option value="description">Sort by Description</option>
        </select>
      </div>

      <ul>
        {sortedItems.map((item) => (
          <li key={item.id}>
            <div>
              <strong>{item.name}</strong> {item.description}
            </div>
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemManager;
