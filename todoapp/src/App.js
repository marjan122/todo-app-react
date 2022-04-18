import React, { useState } from 'react';
import './App.css';


const Todo = () => {
    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState(["", ""]);
    const addItem = () =>{
        if(!inputData){

        } else {
            setItems([...items, inputData]);
            setInputData('')
            
        }
}
    
const delval = (id) => {
    console.log(id);
const updateditems = items.filter((elem, ind) => {
return ind !== id;
});
setItems(updateditems);
}
const remove = () =>{
setItems([]);
}
    
    return (
        <div className='App-header'>
<div className='App'>
<figure>
<img src="data:image/png;base64,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" className="App-logo" alt="logo" />
<figcaption>Todo App</figcaption>
</figure>
<div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <input className='inp' type="text" placeholder="Write here" value={inputData}
    onChange={(e) => setInputData(e.target.value)}></input>
    <br></br>
    <br></br>
    <br></br>
    <button className='inp' onClick={addItem}>Add</button>
    <div>
        {items.map((elem, ind) => {
return(
<div key={ind}>
        <h3 className='h1'>{ elem }</h3>
<button className='inp' onClick={() => delval(ind)}>del</button>
    </div>
)
        })
    }
    
    </div>
    <div>
        <button className='inp' data-sm-link-text="Remove All" onClick={remove}><span>Remove</span></button>
    </div>
</div>
</div>
        </div>
    )
}

export default Todo;
