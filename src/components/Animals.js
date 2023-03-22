import { Box } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";

const Animals = () => {
    let { type } = useParams();
    const [animals, setAnimals] = useState([]);


    useEffect(() => {
        axios.get(`http://localhost:3000/animals/${type}`)
            .then(({ data }) => {
                console.log(data);
                setAnimals(data);
            })

    }, [type])

    console.log(animals);

    return (
        <>
            <Box >
                {
                    animals.map((animal, key) =>
                        <div key={key}>
                            <NavLink to={`/animals/${type}/${key}`}> Animal: {animal.name}</NavLink>
                        </div>
                    )

                }

                <Outlet />
            </Box>
        </>
    )
}

export default Animals;