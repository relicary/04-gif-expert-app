import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState(
        [ 'One Piece', 'Dragon Ball' ]
    );

    const onAddCategory = ( newCategory ) => {

        if ( categories.includes(newCategory) ) return;

        setCategories([ newCategory, ...categories ]);
    };
    
    return (
        <>
            { /* Title */}
            <h1>GitExpertApp</h1>

            { /* Input */ }
            <AddCategory onNewCategory = {
                (newCategory) =>
                    onAddCategory(newCategory)
            } />

            { /* Result List */}
            <ol>
                {
                    categories.map( ( category ) =>
                        <li key={ category }>{ category }</li>
                    )
                }
            </ol>
            
            { /* Gift Item */}
        </>
    )
}