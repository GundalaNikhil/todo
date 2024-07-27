import { IconButton, TextField, Tooltip } from "@mui/material";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlineRounded";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import React, { useState } from "react";
import { useStyles } from "./TodoStyles/TodoListStyles";

const TodoList = ({ todoList, handleEditTask, handleDeleteTask }) => {
  const classes = useStyles();
  const [editId, setEditId] = useState(null);
  const [editInput, setEditInput] = useState("");

  const handleEditClick = (todo) => {
    setEditId(todo.id);
    setEditInput(todo.header);
  };

  const handleEditChange = (e) => {
    setEditInput(e.target.value);
  };

  const handleSaveEditClick = (id) => {
    if (editInput.trim()) {
      handleEditTask(id, editInput.trim());
      setEditId(null);
      setEditInput("");
    }
  };

  const handleCloseClick = () => {
    setEditId(null);
    setEditInput("");
  };

  const handleDeleteClick = (todo) => {
    handleDeleteTask(todo.id);
  };

  return (
    <div>
      {todoList.map((todo) => (
        <div key={todo.id} className={classes.todoItem}>
          {editId === todo.id ? (
            <>
              <TextField
                className={classes.editInput}
                variant="outlined"
                value={editInput}
                onChange={handleEditChange}
                size="small"
              />
              <div className={classes.actionButtons}>
                <IconButton
                  edge="end"
                  aria-label="save"
                  onClick={() => handleSaveEditClick(todo.id)}
                >
                  <CheckCircleOutlineRoundedIcon color="primary" />
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="cancel"
                  onClick={handleCloseClick}
                >
                  <CancelOutlinedIcon color="error" />
                </IconButton>
              </div>
            </>
          ) : (
            <>
              <Tooltip title="Add SubTasks">
                <IconButton aria-label="add_notes">
                  <AddCircleRoundedIcon color="primary" />
                </IconButton>
              </Tooltip>
              <span className={classes.todoText}>{todo.header}</span>
              <div className={classes.actionButtons}>
                <Tooltip title="Edit">
                  <IconButton
                    edge="end"
                    aria-label="edit"
                    onClick={() => handleEditClick(todo)}
                  >
                    <ModeEditOutlinedIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => handleDeleteClick(todo)}
                  >
                    <DeleteIcon color="error" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Complete">
                  <IconButton edge="end" aria-label="complete">
                    <TaskAltIcon color="success" />
                  </IconButton>
                </Tooltip>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
