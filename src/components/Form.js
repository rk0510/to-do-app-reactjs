import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";


const Form = ({
  input,
  setInput,
  tasks,
  setTasks,
  editTasks,
  setEditTasks,
}) => {
  const updateTasks = (title, id, compeleted) => {
    const newTasks = tasks.map((tasks) => {
      return tasks.id === id ? { title, id, compeleted } : tasks;
    });
    setTasks(newTasks);
    setEditTasks(null);
  };
  useEffect(() => {
    if (editTasks) {
      setInput(editTasks.title);
    } else {
      setInput("");
    }
  }, [setInput, editTasks]);

  const OnInputChange = (event) => {
    setInput(event.target.value);
  };

  const empty_regex = /^\s+$/;
  const onFormSubmit = (event) => {
    if (input.match(empty_regex)) {
      event.preventDefault();
      alert("Please type something!");
    } else {
      event.preventDefault();
      if (!editTasks) {
        setTasks([...tasks, { id: uuidv4(), title: input, compeleted: false }]);
        setInput("");
      } else {
        updateTasks(input, editTasks.id, editTasks.compeleted);
      }
    }
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Enter a task"
        className="task-input"
        value={input}
        required
        onChange={OnInputChange}
      />
      <button className="button-add" type="submit">
        {editTasks ? "OK" : "Add"}
      </button>
    </form>
  );
};
export default Form;
