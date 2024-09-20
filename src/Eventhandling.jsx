import React, { useState } from "react";

const EventHandling = () => {
    const [text, setText] = useState("");
    const [dept, setDept] = useState("");
    const [rank, setrank] = useState("");
    const [todo, setTodo] = useState([]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === "name") {
            setText(value);
        } else if (name === "dept") {
            setDept(value);
        } else if (name === "rank") {
            setrank(value);
        } 
    };

    const handleClick = () => {
        const obj = {
            text: text,
            dept: dept,
            rank: rank,
        };
        setTodo([...todo, obj]);
        setText("");
        setDept("");
        setrank("");
    };

    return (
        <>
        <h1>Employee Feedback Form </h1>
        <div>
            Name: <input type="text" name="name" value={text} onChange={handleChange} />
            <br />
            <br />
            Department: <input type="text" name="dept" value={dept} onChange={handleChange} />
            <br />
            <br />
            Ranking: <input type="text" name="rank" value={rank} onChange={handleChange} />
            <br />
            <br />
            <button onClick={handleClick}>Submit</button>
            <ul>
                {todo.map((item, index) => (
                    <li key={index}>
                        {item.text} || {item.dept} || {item.rank}
                    </li>
                ))}
            </ul>
        </div>
        </>
    );
};

export default EventHandling;
