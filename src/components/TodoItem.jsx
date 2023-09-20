import React, { useState } from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';

const TodoItem = ({ todo, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTodo(todo.id, text);
    setIsEditing(false);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="todo-item">
      {isEditing ? (
        <input
          type="text"
          value={text}
          onChange={handleTextChange}
          autoFocus
        />
      ) : (
        <div className="todo-text">{todo.text}</div>
      )}
      <div className="todo-actions">
        {isEditing ? (
          <button onClick={handleSave}>Save</button>
        ) : (
          <>
            <button onClick={handleEdit}><FaEdit /></button>
            <button onClick={handleDelete}><FaTrash /></button>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
