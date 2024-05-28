import { useState } from 'react'
import { Link , useNavigate } from 'react-router-dom'
import Navbar from '../components/navbar'

function Home()
{
    return(
        <div>
            <Navbar />
            <h1 className='page-header'>Home</h1>
        </div>
    )
}
export default Home