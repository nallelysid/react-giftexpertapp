import { useState, useEffect} from 'react'
import { getGifts } from '../helpers/getGifts';
//Es un hook, que no es mas que funciones
//rafc
//Los hooks pueden tener un estado, podian indicar a los componentes cuando tienen que renderizar
export const useFetchGifts = ( category ) => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    });
    
    useEffect ( () =>{         
         getGifts(category).then
             ( imgs =>{

                setTimeout ( () => {
                    setstate({
                     data: imgs,
                     loading: false
                 });
                }, 3000);
                 
             })
     }, [category]); // El segundo parametro es un arreglo de dependencias
                     //Si la ctegoria cambia vuelve a ejecutar este efecto

    

    return state;
}
