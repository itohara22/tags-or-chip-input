import React, { useState } from "react";
import ChipItem from "./components/ChipItem";
import SuggestionList from "./components/SuggestionList";

const names = ["test1", "test2", "test3", "test4", "test5", "test6"];
const App = () => {
  const [inputText, setInputText] = useState<string>("");
  const [chips, setChips] = useState<string[]>([]);
  const [suggList, setSuggList] = useState<string[]>(names);
  const [isList, setIsList] = useState(false);

  const deleteChip = (index: number) => {
    setSuggList((prev) => [...prev, chips[index]]);
    setChips((prev) => prev.filter((_, i) => i !== index));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const listNames = suggList.filter((name) => {
    if (inputText.length) {
      return name.includes(inputText);
    }
    return true;
  });

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const { key } = e;

    if (
      key === "Enter" &&
      inputText.length &&
      !chips.includes(inputText) &&
      suggList.includes(inputText)
    ) {
      e.preventDefault();
      setChips((prevState) => [...prevState, inputText]);
      setInputText("");
    }

    if (key === "Backspace" && !inputText.length && chips.length) {
      e.preventDefault();
      const chipsCopy = [...chips];
      const popppedChip = chipsCopy.pop();
      setChips(chipsCopy);
      if (popppedChip) {
        setInputText(popppedChip);
      }
    }
  };

  const clickHandler = (item: string) => {
    setChips((prev) => [...prev, item]);

    const suggListCopy = suggList.filter((name) => name !== item);

    setSuggList(suggListCopy);
  };

  return (
    <div className="grid place-items-center h-screen">
      <div className="flex gap-2 border-black border-b-2 p-2 items-center">
        {chips.map((chip, index) => (
          <ChipItem
            key={index}
            index={index}
            chipText={chip}
            onClick={deleteChip}
          />
        ))}
        <div className="relative">
          <input
            className="px-2 border-none outline-none"
            placeholder="enter name.."
            value={inputText}
            onChange={(e) => handleChange(e)}
            onKeyDown={(e) => handleKeyDown(e)}
            onClick={() => setIsList(true)}
          />
          {isList && (
            <SuggestionList suggList={listNames} clickHandler={clickHandler} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
