import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState(['Rick and morty']);

    // const handleAdd = (value) => {
    //     setCategories([...categories, value])
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr/>

            <ol>
                { 
                    categories.map((category, index) => (
                        <GifGrid 
                            key={ category + index }
                            category={ category }
                        />
                    ))
                }
            </ol>
        </>
    );

}



