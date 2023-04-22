import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { IoIosAddCircle } from "react-icons/io";

export const Main = () => {
  const [taskName, setTaskName] = useState("");
  const [taskList, setTaskList] = useState([]);

  function add() {
    setTaskList([...taskList, taskName]);
  }

  const taskListContent = taskList.map((item, index) => {
    return (
      <div key={index}>
        <p>{item}</p>
        <AiFillDelete className="delete" onClick={() => deleteTask(index)} />
      </div>
    );
  });

  function deleteTask(index) {
    var temp = [...taskList];
    temp.splice(index, 1);
    setTaskList(temp);
  }

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-md-5  shadow-lg p-3 mb-5 bg-white rounded">
          <h1>TODO List</h1>
          <input
            type="text"
            placeholder="Enter Task"
            className="form-control"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
          <IoIosAddCircle className="add" onClick={add} />
          {taskListContent}
        </div>
      </div>
    </>
  );
};
