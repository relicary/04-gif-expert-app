import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState(
        [ 'One Piece', 'Dragon Ball' ]
    );

    const onAddCategory = () => {
        setCategories([ 'Naruto', ...categories ]);
    };

    return (
        <>
            { /* Title */}
            <h1>GitExpertApp</h1>

            { /* Input */ }
            <AddCategory />

            { /* Result List */}
            <button onClick={ onAddCategory }>Add</button>
            <ol>
                {
                    categories.map( category =>
                        <li key={ category }>{ category }</li>
                    )
                }
            </ol>
                { /* Gift Item */}
        </>
    )
}