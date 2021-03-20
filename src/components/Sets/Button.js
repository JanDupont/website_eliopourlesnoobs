import React from 'react'

function Button({button, filter}) {
    return (
        <div className="setsButtons">
            {
                button.map((cat, i)=>{
                    return <button type="button" onClick={() => filter(cat)} className="setsBtn">{cat}</button>
                })
            }
        </div>
    )
}

export default Button
