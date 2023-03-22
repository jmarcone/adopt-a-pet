import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Animal = () => {
    let { type, id } = useParams();
    const [animal, setAnimal] = useState([]);


    useEffect(() => {
        axios.get(`http://localhost:3000/animals/${type}/${id}`)
            .then(({ data }) => {
                console.log(data);
                setAnimal(data);
            })

    }, [type, id])

    console.log(animal);

    return (
        <>
            <h1>{animal.name}</h1>
            other data
        </>
    )
}

export default Animal;