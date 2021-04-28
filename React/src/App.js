import { useState } from 'react';
import './App.css';
import Card from './components/Card.js';
import { Input, Button, Modal } from 'antd';


function App() {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([
    {id: 1, text: "Vytřít podlahu"},
    {id: 2, text: "Udělat cviko"},
    {id: 3, text: "Vyvenčit psa"},
  ]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalValues, setModalValues] = useState({ 'id': null, 'text': null });

  const editTodo = (id, text) => {
    setModalValues({ 'id': id, 'text': text });
    setModalVisible(true);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  };

  const onChangeText = (value) => {
    setModalValues({...modalValues, text: value});
    setTodos(todos.map((todo) => todo.id === modalValues.id ? {...todo, text: value} : todo));
  }

  return (
    <div className="App">
      <Input placeholder="Nový úkol" value={value} style={{ width: '350px'}} onChange={(e) => setValue(e.target.value)} />
      <Button onClick={() => setTodos([...todos, {id: Math.max(...todos.map((t) => t.id)) + 1, text: value}]) }>Přidat úkol</Button>
      { todos.map((todo) => 
        <Card 
          key={todo.id} 
          id={todo.id} 
          text={todo.text} 
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        ></Card>) }

      <Modal 
        title="Edit Todo"
        cancelButtonProps={{ style: { display: 'none' } }} 
        closable={true} 
        visible={modalVisible} 
        onCancel={() => {setModalVisible(false)}} 
        onOk={() => {setModalVisible(false)}} >
        <Input placeholder="Text" value={modalValues.text} onChange={(e) => onChangeText(e.target.value)} />
      </Modal>
    </div>
  );
}

export default App;
