import { useState } from "react";
import "./App.css";
import List from "./components/List";

const initialState = {
  id: 0,
  stack: "",
  language: "",
};

function App() {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState(initialState);
  const [showBtnEditContent, setShowBtnEditContent] = useState(false);

  const changeStack = (e) => {
    setItem({ ...item, stack: e.target.value });
  };

  const changeLanguage = (e) => {
    setItem({ ...item, language: e.target.value });
  };

  const addItem = () => {
    setShowBtnEditContent(false);
    setItems([...items, { ...item, id: new Date().getMilliseconds() }]);
    setItem({ stack: "", language: "" });
  };

  const deleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems([...newItems]);
  };

  const editItem = (obj) => {
    setShowBtnEditContent(true);
    setItem(obj);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!showBtnEditContent) {
      addItem();
    } else {
      items.map((user) => {
        if (user.id === item.id) {
          user.stack = item.stack;
          user.language = item.language;
          return user;
        }
        return user;
      });
      setShowBtnEditContent(false);
      setItem({ stack: "", language: "" });
    }
    e.target.reset();
  };

  return (
    <div className="app mx-auto mx-auto mt-5 px-5 py-5 border border-2 border-primary rounded-3">
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="fs-2 text-center mb-5">
          ToDo App - {showBtnEditContent ? "Edit" : "Add"}{" "}
        </h2>
        <div className="mb-3">
          <label className="form-label mb-3" htmlFor="stack">
            Enter Stack:
          </label>
          <input
            id="stack"
            className="form-control form-control"
            type="text"
            placeholder="Enter Stack..."
            onChange={(e) => changeStack(e)}
            value={item.stack}
          />
        </div>
        <div className="mb-3">
          <label className="form-label  mb-3" htmlFor="language">
            Enter Language:
          </label>
          <input
            id="stack"
            className="form-control form-control"
            type="text"
            placeholder="Enter language..."
            onChange={(e) => changeLanguage(e)}
            value={item.language}
          />
        </div>
        <button className="btn btn-primary w-100">
          {showBtnEditContent ? "Edit" : "Add"}
        </button>
      </form>
      <hr className="my-5" />
      <List
        items={items}
        item={item}
        deleteItem={deleteItem}
        editItem={editItem}
      />
    </div>
  );
}

export default App;
