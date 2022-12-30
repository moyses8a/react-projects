import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalhostStorage = () => {
  const list = localStorage.getItem('list');
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
}

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalhostStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      /**display alert */
      showAlert(true, 'please enter value', 'danger');
    } else if (isEditing) {
      /** Edit */
      setList(
        list.map(item => {
          if (item.id === editId) {
            return { ...item, title: name }
          }
          return item;
        })
      );
      setName('');
      setEditId(null);
      setIsEditing(false);
      showAlert(true, 'value changed', 'success');
    } else {
      /** New item */
      showAlert(true, 'item added to the list', 'success');
      const newItem = {
        id: new Date().getTime().toString(),
        title: name
      }
      setList((values) => [...values, newItem]);
      setName('');
    }
  }
  const showAlert = (show = false, msg = '', type = '') => {
    setAlert({ show, msg, type });
  }
  const clearList = () => {
    showAlert(true, 'empty list', 'danger');
    setList([])
  }
  const removeItem = (id) => {
    showAlert(true, 'item removed', 'danger');
    setList((values) => values.filter((item) => item.id !== id));
  }
  const editItem = (id) => {
    const found = list.find(item => item.id === id);
    setIsEditing(true);
    setEditId(id);
    setName(found.title);
  }
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list])
  return <section className='section-center'>
    <form className='grocery-form' onSubmit={handleSubmit}>
      {alert.show && <Alert {...alert} removeAlert={showAlert} list={list}></Alert>}
      <h3>grocery bud</h3>
      <div className="form-control">
        <input type="text" className='grocery' value={name} onChange={(e) => setName(e.target.value)} placeholder='e.g. eggs'/>
        <button type="submit" className='submit-btn'>{isEditing ? 'edit' : 'submit'}</button>
      </div>
    </form>
    {list.length > 0 && (
      <div className="grocery-container">
        <List items={list} removeItem={removeItem} editItem={editItem}></List>
        <button className='clear-btn' onClick={() => clearList()}>
          Clear items
        </button>
      </div>
    )}
  </section>
}

export default App
