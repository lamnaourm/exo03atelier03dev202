import React from 'react'
import Livre from './Livre'

export default function Bibliotheque({livres}) {
  return (
    <div className='biblio'>
        {livres.map(e => 
            <Livre url={e.url} titre={e.titre} prix={e.prix}/>
            )}
    </div>
  )
}
