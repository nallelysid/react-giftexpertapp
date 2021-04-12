//rafc
import React from 'react'
import { useFetchGifts } from '../hooks/useFetchGifts';
//{ useState, useEffect }

import { GiftGridItem } from './GiftGridItem';

export const GiftGrid = ({ category }) => {

    const {data:images, loading} = useFetchGifts( category );

    return (
        <>
            <h3 className="animate__animated animate__flash">{ category }</h3>   
            {loading && <p>'Cargando...'</p>}
      
            <div className="card-gift">
                        
                {
                    images.map( img => (
                        <GiftGridItem 
                            key= {img.id} 
                            { ...img } 
                        />
                    ))                
                }            
            </div> 
        </>
    )
}
    