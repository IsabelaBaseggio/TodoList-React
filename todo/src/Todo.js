import React, { useState } from "react";
import Item from "./components/Item";
import TodoForm from "./components/TodoForm";
import List from "./components/List";
import './Todo.css';

function Todo(){
    const [items, setItems] = useState([]);
    
    function onAddItem(text){

        let item = new Item(text);

        setItems([...items, item]);
    }

    function onItemDelete(item){
        let filteredItems = items.filter(it => it.id !== item.id);

        setItems(filteredItems);

    }

    function onDone(item){

        let updateItems = items.map(it=>{
            if(it.id === item.id){
                it.done = !it.done;
            }
            return it;
        })

        setItems(updateItems);
    }

    return (<div className="container">
                <h1>Todo</h1>
                <TodoForm onAddItem={onAddItem}></TodoForm>
                <List onDone={onDone} onItemDelete={onItemDelete} items={items}></List>

            </div>)

}

export default Todo;