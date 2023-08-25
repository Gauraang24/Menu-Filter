import React, { useState } from 'react'
import Menu from "./menu"
import "../App.css"
import MenuList from './Menu-list'
import AllButtons from './AllButtons'



const allCategories = [...new Set(Menu.map((curELem) => curELem.category)), "All"]

const Gallery = () => {

    const [a, setA] = useState(Menu)
    const [catItems, setCatItems] = useState(allCategories)


    const filterItem = (category) => {

        if (category === "All") {
            setA(Menu)
            return
        } else {
            const updatedItem = Menu.filter((currElem) => {
                return currElem.category === category
            })
            setA(updatedItem)
        }



    }

    return (
        <div>
            <h1 className='heading'>Order Your Favourite Dish</h1>


            <AllButtons filterItem={filterItem} catItems={catItems} />



            <div className='menu-items'>
                <div className='centerdiv'>
                    {a.map((elem) => {
                        const { id, name, image, description, price } = elem

                        return (

                            <MenuList image={image} description={description} price={price} name={name} key={id} />



                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Gallery
