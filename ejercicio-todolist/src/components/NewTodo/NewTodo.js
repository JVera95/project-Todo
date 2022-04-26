import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function NewToDo({ setToDos }) {
  const [data, setData] = useState("");

  const handleData = (e) => {
    setData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setToDos((todos) => [
      { title: data, completed: false, id: uuidv4() },
      ...todos,
    ]);
    setData("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleData}
          name="title"
          placeholder="Introduce un nuevo To-Do"
          type="text"
          className="w-25 mt-5"
          value={data}
        />
      </form>
    </div>
  );
}
