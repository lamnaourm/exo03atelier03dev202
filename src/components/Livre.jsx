import React from 'react'
import Image from './Image'
import Titre from './Titre'
import Prix from './Prix'

export default function Livre({ url, titre, prix }) {
    return (
        <div className='livre'>
            <Image image={url} titre={titre} />
            <Titre titre={titre} />
            <Prix prix={prix} />
        </div>
    )
}
