import React, { useState } from 'react';

const Todolist = () => {

    const [userInput, setUserInput] = useState("");
    const [todoList, setTodoList] = useState([]);

    const handleChange = (e) => {
        e.preventDefault();
        setUserInput(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        setTodoList([
            userInput,...todoList
        ])
        setUserInput("");
    }
    const handleDelte = (todo) => {
        const updateArr = todoList.filter(todoItem => todoList.indexOf(todoItem)
        != todoList.indexOf(todo))
        setTodoList(updateArr);
    }
    return (
        <div className="p-6 max-w-sm mx-auto bg-gray-400 rounded-xl shadow-md m-8">
            <h1 className="text-center m-2">To do List</h1>
            <hr />
            <div className="flex justify-center">
                <input
                className="bg-transparent  py-2 px-4 border border-blue-500 hover:border-transparent rounded m-4"
                 type="text"
                 value={userInput}
                 onChange={handleChange}
                />
                <button 
                className="bg-transparent hover:text-white py-2 px-4 border border-blue-500 rounded m-4"  
                onClick={handleSubmit}>Submit</button>
                <hr />
                </div>
                <div className="flex flex-col bg-gray-600 rounded-xl shadow-md border-blue-500 ">
                    {
                    todoList.map((todo,id) => {
                     return <div 
                     className="text-center py-2 px-2 flex justify-between "
                     key={id}>{todo} 
                     <button
                     className="flex bg-transparent hover:bg-blue-500 hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded m-4 "  
                     onClick={(e) => {
                         e.preventDefault();
                         handleDelte(todo);
                     }}>Delete</button>
                     </div>   
                    })
                }
            </div>
        </div>
    )
}

export default Todolist
