import React from 'react'
import Topbn from './Topbn'
import left from './left'
import Right from './Right'
export default function App(){
    return(
        <div className="container">
            <div className='one'>
                <Topbn/>
            </div>
            <div className='left'>
                <left/>
            </div>
            <div className='Right'>
                <Right/>
            </div>
        </div>
    )
}