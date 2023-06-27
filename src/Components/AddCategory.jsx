import { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ( { onNewCategory } ) => {

    const [ categorie, setCategorie ] = useState('');

    const onInputChange = ({target}) => {
        setCategorie(target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if(categorie.trim().length <= 1 ) return;

        onNewCategory( categorie.trim() );
        setCategorie('');
    }

    return (
        <form onSubmit={ (e) => onSubmit(e) }>
            <input 
                type="text" 
                placeholder="Buscar Gifs"
                value={categorie} 
                onChange={ onInputChange } />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}
