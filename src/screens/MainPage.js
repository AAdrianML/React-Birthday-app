import React, { useState } from 'react';
import data from '../resources/data';
import List from './List';

const MainPage = () => {
    const [people, setPeople] = useState(data)

    function bringOrCleanData(people){
        if (people && people.length > 0) {
            setPeople([])
        } else {
            setPeople(data)
        }
    }
    
    return (
        <main> 
            <section className="container">
                <h3>{people.length} birthdays today</h3>
                <List people={people}/>
                <button 
                 onClick={() =>bringOrCleanData(people)} 
                >
                 Clear all
                </button>
            </section>
        </main>
    )
}

export default MainPage;




