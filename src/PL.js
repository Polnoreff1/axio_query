import React from 'react';
import axios from 'axios';
import {useEffect, useState} from "react";

// {people.map(person => <li>{person.title}</li>)}
function PersonList() {
    const [people, set_people] = useState([]);
    console.log(people);

    useEffect(() => {
        const f = async () => {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/todos`);
            const people = response.data;
            set_people(people);
        };
        f();
    }, []);
    return (
        <ol>
            {people.slice(0,10).map(h => <li>{h.title}</li>)}
        </ol>
    )
}

export default PersonList;