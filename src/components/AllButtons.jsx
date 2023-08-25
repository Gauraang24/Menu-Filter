import React from 'react'

const AllButtons = (props) => {
    return (
        <>
            <div className='All-Buttons'>

                {
                    props.catItems.map((curELem, index) => {
                        return <button className='Btn' key={index} onClick={() => {props.filterItem(curELem) }}>{curELem}</button>
                    })
                }


            </div>
        </>
    )
}

export default AllButtons
