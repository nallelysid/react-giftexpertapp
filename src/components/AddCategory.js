import React, {useState} from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ( {setCategories} ) => {
    const [InputValue, setInputValue] = useState('');

    const handleInputChange = ( e ) =>{
        console.log(e.target.value);
        setInputValue(e.target.value);
    }
    const handleSubmit= (e) => {
        //Previene comportamiento por defecto del fomulario
        e.preventDefault();
        
        if( InputValue.trim().length > 2){
            setCategories( cats => [InputValue, ...cats ]);//Como primer argumento recibe el etado anterior, y en el callback el nuevo estado
            setInputValue('');
        }
    }

    return (        
        <form onSubmit = {handleSubmit}>
            <input 
                type="text" 
                value = {InputValue} 
                onChange = { handleInputChange }
                
            />            
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

    