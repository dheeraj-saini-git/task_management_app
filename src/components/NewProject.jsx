import React from "react";
import Input from "./Input";
import Button from "./button";
import {  useRef } from "react";

const NewProject = ({onAdd}) => {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  
  function handleSave() {
    const enteredTitle = title.current.value
    const enteredDesctiption = description.current.value
    const enteredDueDate = dueDate.current.value

    if(enteredTitle==='' || enteredDesctiption==='' || enteredDueDate===''){
      return alert('Please fill all the details')
    }

    onAdd({
      title: enteredTitle,
      description: enteredDesctiption,
      dueDate: enteredDueDate
    })
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end my-3 gap-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>
        <li>
          <Button onClick={handleSave}>Save</Button>
        </li>
      </menu>

      <div>
        <Input ref={title} type="text" name="Title" label="Title" />
        <Input ref={description} name="Description" label="Description" textarea />
        <Input ref={dueDate} type="date" name="Due Date" label="Due Date" />
      </div>
    </div>
  );
};

export default NewProject;
