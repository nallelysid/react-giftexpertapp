//rafc  -- snipped

import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory'
import { GiftGrid } from './components/GiftGrid'

export const GiftExpertApp = () => {
    // const categories = ['One Punch','Samurai X','Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch'])

    //const handleAdd = () =>{
        //var cat = categories.slice();
        //cat.push('hello');
        //setCategories(cat);
        //setCategories( ['HunterXHunter', ...categories]); //Copio el arreglo y agrego una nueva
        //setCategories( cats => [...cats, 'HunterXHunter']); //Como primer argumento recibe el etado anterior, y en el callback el nuevo estado
    //}

    return (
        <div>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories = {setCategories} />
            <hr />
            
            <ol>
                { 
                    categories.map( (category) =>
                         <GiftGrid 
                         key={ category }
                         category={ category } />
                    )
                }
            </ol>

        </div>
    )
}
