import React, {useState} from 'react';
import '../App.css';
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import Counter from './Counter';

const items = [
    {
        text: 'Home',
        link: 'home-page',
    },
    {
        text: 'Products',
        link: 'goods',
    },
    {
        text: 'Service',
        link: 'service',
    },
    {
        text: 'Contacts',
        link: 'contacts',
    },
    {
        text: 'Prices',
        link: 'prices',
    },

];

const items2 = [
    {
        text: 'One',
        link: 'page-one',
    },
    {
        text: 'Two',
        link: 'page-two',
    },
    {
        text: 'Three',
        link: 'page-three',
    },
];
const textStory = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';

const counter1 = 2, counter2 = 5;
const totalCounter = counter1 + counter2;
function App() {
const [totalCount, setTotalCount] = useState(0);


    function countChanges(value){
        console.log('CLICKED' + value);
        setTotalCount(value);
    }

    return (
        <div className="App">
            <Header menuItems={items}/>
            <Content />
            Total: {totalCount}
            <Counter startCount={counter1} countChanges={countChanges}/>
            <hr/>
            <Counter startCount={counter2} countChanges={countChanges}/>
            <Footer menuItems={items} items2={items2} textStory={textStory}/>
        </div>
    );
}

export default App;