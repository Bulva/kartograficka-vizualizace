import React from 'react';
import { Button } from 'antd';


function Card(props) {
    return (
        <div style={{ width: '200px', height: '200px', backgroundColor: 'blue', marginLeft: '20px', marginTop: '20px', paddingTop: '7px' }}>
            <p style={{ color: 'white' }}>{ props.text }</p>
            <Button onClick={() => props.deleteTodo(props.id)}>Vymazat</Button>
            <Button onClick={() => props.editTodo(props.id, props.text)} style={{ marginLeft: '5px' }}>Upravit</Button>
        </div>
    )
}

export default Card;