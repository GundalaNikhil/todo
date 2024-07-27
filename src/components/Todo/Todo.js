import React, { useState } from "react";
import { useStyles } from "./TodoStyles/TodoStyles";
import { TextField, Typography, Container, IconButton } from "@mui/material";
import { AddTask } from "@mui/icons-material";
import TodoList from "./TodoList";

const Todo = () => {
  const classes = useStyles();
  const [input, setInput] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const addTask = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setTaskList([
        ...taskList,
        {
          id: Date.now(),
          header: input.trim(),
          subTasks: {},
        },
      ]);
      setInput("");
    }
  };

  const handleEditTask = (id, newHeader) => {
    const updatedTodos = taskList.map((task) =>
      task.id === id ? { ...task, header: newHeader } : task
    );
    setTaskList(updatedTodos);
  };

  const handleDeleteTask = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  return (
    <Container className={classes.todoContainer}>
      <Typography variant="h3" className={classes.title}>
        TODO
      </Typography>
      <form onSubmit={addTask} className={classes.form}>
        <TextField
          className={classes.input}
          placeholder="Add Task"
          variant="outlined"
          value={input}
          onChange={handleChange}
        />
        <IconButton
          type="submit"
          edge="end"
          aria-label="save"
          className={classes.addButton}
        >
          <AddTask />
        </IconButton>
      </form>
      {taskList.length > 0 ? (
        <TodoList
          todoList={taskList}
          handleEditTask={handleEditTask}
          handleDeleteTask={handleDeleteTask}
        />
      ) : (
        <Typography className={classes.emptyMessage}>
          No Tasks at the moment
        </Typography>
      )}
    </Container>
  );
};

export default Todo;
