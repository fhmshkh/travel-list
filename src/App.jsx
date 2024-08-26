import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Footer from "./components/Footer";

import { Stats } from "./components/Stats";
function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearList() {
    const confirmed = window.confirm(
      "Are You sure you want to delete all items"
    );
    if (confirmed) setItems([]);
  }
  return (
    <>
      <div className="app">
        <Logo></Logo>
        <Form onAddItems={handleAddItems}></Form>
        <PackingList
          items={items}
          onDeleteItem={handleDeleteItem}
          onToggleItem={handleToggleItem}
          onClearList={handleClearList}
        ></PackingList>

        <Stats items={items}></Stats>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
