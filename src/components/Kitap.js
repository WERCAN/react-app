import React from 'react'

function Kitap({kitap}) {
    return (
        <div>
            <p>Kitap: {kitap.name} , Yazar: {kitap.author}</p>
        </div>
    )
}

export default Kitap
