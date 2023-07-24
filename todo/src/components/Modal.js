import React from "react";
import Card from "./Card";

function Modal(props){

    function hideModal(e){
        let target = e.target;
        if(target.id === "modal"){
            props.onHideModal();
        }
        console.log(target);
    }

    return (
        <div id="modal" onClick={hideModal} className={props.show?"modal":"modal hide"}>
            <Card className="cardModal">
                {props.children} 
                {/* // isso permite que ao invés de passar o valor do conteúdo aqui no componente, seja passado o valor quando ele está sendo criado, no caso, em Todo.js */}
            </Card>
        </div>
    )

}

export default Modal;