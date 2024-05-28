import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/navbar'
//import propertiesData from '../dummy/properties.json'
import { useEffect,useState } from 'react'
import { getProperties } from '../services/property'


function Properties()
{


    const navigate = useNavigate()
    const[properties,setProperties]=useState([])
    const loadProperties = async () => {

        const result = await getProperties()
        if (result['status'] == 'success') {
          setProperties(result['data'])
          console.log("if")

          console.log(result['data'])
        }
        else{
            console.log("Else")
            console.log(result['error'])
        }
      }
    
      useEffect(() => {
        console.log("useEffect")
        // this function will be called immediately after component gets loaded
        loadProperties()
      }, [])
    
    const onDelete = (index)=>{
        properties.splice(index,1)
        setProperties([...properties])
    }
    const onDetails =(index)=>{
       // navigate('/property-details', { state: { id:['id'] } })
  
        navigate('/property-details')
    }
    return(
        <div>
            <Navbar />
            <h1>Properties</h1>
            <div className="mb-3 mt-3">
                <Link to ="/addProperty" className="btn btn-success">Add Property</Link>
            </div>
            <table className="table table-striped mt-5">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Address</th>
                    <th>Rent</th>
                    <th>ContactNumber</th>
                    <th>Actions</th>
                    <th>Actions</th></tr>
                </thead>
                <tbody>
                    {
                        properties.map((property,index)=>{
                            return(
                            <tr>
                                <td>{index + 1 }</td>
                                <td>{property.title}</td>
                                <td>{property.address}</td>
                                <td>{property.rent}</td>
                                <td>{property.contactNo}</td>
                                                               {/* <td>{property.city}</td>
                                <td>{property.state}</td>
                                <td>{property.zipCode}</td>
                                <td> */}<td>
                                    <button 
                                    onClick={()=>{
                                        onDelete(index)
                                    }} 
                                    className="btn btn-danger bt-sm">Delete</button>
                               
                                </td>
                                <td>
                                <button onClick={() => {
                                  onDetails(index)
                                    }} className="btn btn-primary bt-sm">Details</button>
                                </td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Properties