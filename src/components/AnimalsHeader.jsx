import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const AnimalsHeader = () => {



    return (
        <>
            <p>Browse through the links below to find your new furry friend:</p>
            <div>
                <Stack direction="row" spacing={2}>
                    <NavLink to="/animals/dogs">Dogs</NavLink>
                    <NavLink to="/animals/cats">Cats</NavLink>
                    <NavLink to="/animals/rabbits">Rabbits</NavLink>
                </Stack>
            </div>

            <Outlet />
        </>
    )
}

export default AnimalsHeader;