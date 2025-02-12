import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState(
        [ 'Red Panda' ]
    );

    const onAddCategory = ( newCategory ) => {

        if ( categories.includes(newCategory) ) return;

        setCategories([ newCategory, ...categories ]);
    };
    
    return (
        <>
            <h1>GitExpertApp</h1>

            <AddCategory onNewCategory = {
                (newCategory) =>
                    onAddCategory(newCategory)
            } />
            
            {
                categories.map( ( category ) =>  (
                    <GifGrid key={ category } category={ category }/>
                ))
            }
            
        </>
    )
}