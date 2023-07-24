import React from "react";

function DoneImg(props){

    if(props.done){
        return (<img alt="check done" src="./assets/check_on.svg"></img>)
    } else {
        return (<img alt="check undone" src="./assets/check_off.svg"></img>)
    }

}

function List(props){

    return (<ul>
        {props.items.map(item => <li className={item.done?"done item":"item"} key={item.id}>
            {item.text}
            <button onClick={()=> {props.onDone(item)}}><DoneImg done={item.done}></DoneImg></button>
            <button onClick={()=>{props.onItemDelete(item)}}>
                <img src="./assets/bin.png" alt="delete"></img>
            </button>
        </li>)}
    </ul>);
}

export default List;