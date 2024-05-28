import axios from 'axios'

export async function register(firstName,lastName,email,password){
    try{
        const body ={firstName, lastName,email,password }
        const response =await axios.post( `http://localhost:4000/admin/register`,body)
        return response.data
    }
    catch(ex)
    {
        console.log(`exception:`,ex);
    }

    return null
}


// export async function login(email,password){
//     try{
//         const body={email,password}
//         const response= await axios.post( `http://localhost:4000/admin/login`,body)
//         return response.data

//     }catch(ex){
//         console.log(`Exception:`,ex)
//     }
// }

//import axios from 'axios';

export async function login(email, password) {
  try {
    const response = await axios.post(`http://localhost:4000/admin/login`, { email, password });
    return response.data;
  } catch (error) {
    console.error("Error during login:", error);
    throw error; // Rethrow the error so it can be caught by the calling function
  }
}


// export async function abc(firstName,lastName)
// {
//     try{
//         const body={firstName,lastName}
//         const response= await axios.post(`http://localhost:4000/admin/login`,body)
//         return response.data
//     }
//     catch(ex)
//     {
//         console.log(ex)
//     }
// }