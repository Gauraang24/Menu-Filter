import React from 'react'
import "./menuList.css"

const MenuList = (props) => {
    return (
        <>


            <div className='Card'>
                <img src={props.image} alt="" />
                <div className='info-info'>
                    <h1>{props.name}</h1>
                    <p className='Description'>{props.description}</p>

                    <div className='order'>
                        <p className='price'>{props.price}</p>
                        <button>Order Now</button>
                    </div>

                    <p>Prices may vary on selected date</p>
                </div>
            </div>
        </>
    )
}

export default MenuList
