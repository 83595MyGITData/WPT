import axios from "axios"

export async function getProperties()
{
    console.log("hello")
    try{
        console.log("hello try")
        const token=sessionStorage['token']
        const response= await axios.get(`http://localhost:4000/property`,{headers:{token},})
        console.log(response.data)
        return response.data
        

    }
    catch(ex)
    {
        console.log(ex)
    }
    return null
}

export async function insertProperty(title)
{
    try{
        const body ={title}
        console.log("hello try")
        const token=sessionStorage['token']
        const response= await axios.post(`http://localhost:4000/property/`,body,{headers:{token},})
        return response.data

    }
    catch(ex)
    {
        console.log(ex)
    }
    return null
}

export async function getPropertyDetails(id) {
    try {
      const token = sessionStorage['token']
      const response = await axios.get(
        `http://localhost:4000/property/details/${id}`,
        {
          headers: { token },
        }
      )
      return response.data
    } catch (ex) {
      console.log(`exception: `, ex)
    }
  
    return null
  }

//,description,rent,contactNumber
// export async function insertProperty(title,description,rent,contactNumber)
// {
//     try{
//         const body ={title,description,rent,contactNumber}
//         console.log("hello try")
//         const token=sessionStorage['token']
//         const response= await axios.post(`http://localhost:4000/property/`,body,{headers:{token}})
//         return response.data

//     }
//     catch(ex)
//     {
//         console.log(ex)
//     }
//     return null
// }