import React from 'react'
//Style in App.css

function Menu({menuItem}) {
    return (
        <div className="item">
            {
                menuItem.map((item) => {
                    return <div className="item-con" key={item.id}>
                        <div className="item-container">
                            <a href={item.link} target="_blank" rel="noopener noreferrer"><img src={item.image} alt=""/></a>
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                            <p>Res<span>&nbsp;&nbsp;</span>: {item.res}</p>
                            <p>Exos: {item.exos}</p>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default Menu
