import React from "react";
import Card from "./Card";

function DoneImg(props) {
  if (props.done) {
    return <img alt="check done" src="./assets/check_on.svg"></img>;
  } else {
    return <img alt="check undone" src="./assets/check_off.svg"></img>;
  }
}

function ListItem(props) {
  return (<li>
          <Card className={props.item.done ? "done item" : "item"}>
            <p>{props.item.text}</p>
            <div>
              <button
                onClick={() => {
                  props.onDone(props.item);
                }}
              >
                <DoneImg className="img" done={props.item.done}></DoneImg>
              </button>
              <button
                onClick={() => {
                  props.onItemDelete(props.item);
                }}
              >
                <img className="img" src="./assets/bin.png" alt="delete"></img>
              </button>
            </div>
          </Card>
        </li>
  );
}

export default ListItem;
