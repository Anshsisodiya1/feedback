import React, { useState } from "react";
// import childComp from "./childComp";
import ChildCompo from "./ChildCompo";

const EventHandling = () => {
    const [text, setText] = useState("");
    const [dept, setDept] = useState("");
    const [rank, setrank] = useState("");
    const [todo, setTodo] = useState([]);
    const [toggle, settoggle] = useState(true);

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
        settoggle(!toggle);
    };

    return (
        <>
        <h1>Employee Feedback Form </h1>

        { toggle ? (
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
        </div>
    ):(
        <ChildCompo todo={todo} handleClick={handleClick}/>
    )
}
        </>
    );
};

export default EventHandling;
