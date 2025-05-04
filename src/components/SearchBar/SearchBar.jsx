import { useState } from "react";
import toast from "react-hot-toast";
import s from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedInput = input.trim();
    if (trimmedInput === "") {
      toast.error("Enter something to search for!");
      return;
    }

    onSubmit(trimmedInput);
    setInput("");
  };
  return (
    <header className={s.header}>
      <form onSubmit={handleSubmit} className={s.form}>
        <input
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className={s.button}>
          Search
        </button>
      </form>
    </header>
  );
};
export default SearchBar;
