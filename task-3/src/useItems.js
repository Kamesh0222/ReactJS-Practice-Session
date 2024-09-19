import { useMemo } from "react";

const useItems = (items, searchTerm, sortOption) => {
  const filteredItems = useMemo(() => {
    return items.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [items, searchTerm]);

  const sortedItems = useMemo(() => {
    return [...filteredItems].sort((a, b) => {
      if (sortOption === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortOption === "description") {
        return a.description.localeCompare(b.description);
      } else {
        return 0;
      }
    });
  }, [filteredItems, sortOption]);

  return sortedItems;
};

export default useItems;
