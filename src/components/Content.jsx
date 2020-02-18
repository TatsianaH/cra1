import React from 'react';
import '../App.css';
import myPhoto from '../photo.jpg';

function Content(props) {

    let name = 'Initial';

    const clickButtonHandler = (value) => {
        console.log('Clicked!' + name);
    }

    const inputHandler = (e) => {
        name = e.target.value;
        console.log(e.target.value);
    }


    return (
        <main>
            <h1>First App</h1>
            {name}
            <input type="text" onChange={inputHandler}/>
            <button onClick={() => clickButtonHandler(1)}>Add one</button>
            <button onClick={() => clickButtonHandler(2)}>Add two</button>
            <img src={myPhoto} alt="Girl" className="girlPic"/>
        </main>
    );
}

export default Content;
