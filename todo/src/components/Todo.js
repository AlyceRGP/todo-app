import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck as faCheck} from "@fortawesome/free-regular-svg-icons";

export const Todo = ({task, deleteTodo, editTodo, toggleComplete}) => {

  const isCompleted = task.completed;

  return (
    <div className="Todo">
        <p className={`${task.completed ? "completed" : "incompleted"}`} >{task.task}</p>
        <div>
        <FontAwesomeIcon className="done-icon" icon={isCompleted ? faCircleCheck : faCheck} onClick={() => toggleComplete(task.id)} />
        <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} style={{ color: isCompleted ? 'grey' : '' }} onClick={isCompleted ? null : () => editTodo(task.id)} />
        <FontAwesomeIcon className="delete-icon" icon={faTrash} style={{ color: isCompleted ? 'grey' : '' }} onClick={isCompleted ? null : () => deleteTodo(task.id)} />
        </div>
    </div>
  )
}