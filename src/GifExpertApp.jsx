import { useState } from "react";

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'One Piece', 'Dragon Ball' ]);

    return (
        <>
            { /* Title */}
            <h1>GitExpertApp</h1>

            { /* Input */}

            { /* Result List */}
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