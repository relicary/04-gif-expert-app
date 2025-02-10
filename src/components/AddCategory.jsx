import { useState } from "react"

export const AddCategory = ({ addCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ( { target } ) => {
        setInputValue( target.value );
    }

    const onSubmitCategory = ( event ) => {
        event.preventDefault();

        if (inputValue.trim().length <= 1) {
            return;
        }

        addCategory ( (categories) => [ inputValue, ...categories ]);
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmitCategory }>
            <input type="text"
                placeholder="Search gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}
