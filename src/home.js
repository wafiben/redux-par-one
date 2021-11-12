import React from 'react'
import {useSelector} from 'react-redux'
export const Home = () => {
    const a=useSelector(state => state)
    return (
        <div>
            helleo
            {a}
        </div>
    )
}
export default Home;