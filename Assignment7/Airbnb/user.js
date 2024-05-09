const express = requestuire('express');
const mysql = requestuire('mysql2');
const cors = requestuire('cors');
const app = express();

const connectionString = {
                            host: "localhost",
                            port: 3306,
                            database: "airbnb_db",
                            user: "root",
                            password: "manager"
                         };

app.use(express.json());
app.use(cors());
//Display ALl Users
app.get("/airbnb",(requestuest,response)=>{
    var connection = mysql.createConnection(connectionString);
    connection.connect();

    let queryText = `select * from user`;
    connection.query(queryText,(err,result)=>{

        response.setHeader("Content-Type","application/json");
        console.log("result"+result);
        console.log("err"+err);
        if(err==null)
            {
                response.write(JSON.stringify(result));
                connection.end();
                response.end();
            }
        else
            {
                response.write(JSON.stringify(err));
                connection.end();
                response.end();
            }

    })

})
//Resister user
app.post("/airbnb/registration",(requestuest,response)=>
{
    var id=requestuest.body.id;
    var firstName=requestuest.body.firstName;
    var lastName=requestuest.body.lastName;
    var email=requestuest.body.email;
    var password=requestuest.body.password;
    var phoneNumber=requestuest.body.phoneNumber;
    console.log(firstName);
    console.log(email);

    var connection = mysql.createConnection(connectionString);
    connection.connect();

    let queryText = `insert into user (firstName,lastName,email,password,phoneNumber) values (?,?,?,?,?)`;
    let queryValues = [firstName,lastName,email,password,phoneNumber];
    connection.query(queryText,queryValues,(err,result)=>{
        response.setHeader("Content-Type","application/json");
        console.log(queryValues);

        if(err==null)
        {
            console.log("Registration Successful");
            response.write(JSON.stringify(result));
            connection.end();
            response.end();
        }
        else
        {
            console.log("Registration Failure");
            connection.write(JSON.stringify(err));
            connection.end();
            response.end();
        }
    })
})

//Login user 
app.post("/airbnb/login",(requestuest,response)=>{
    
    var email = requestuest.body.email;
    var password = requestuest.body.password;
    
        var connection = mysql.createConnection(connectionString);
        connection.connect();
    
        let queryText = `select * from user where email= ? and password= ?`;
        let queryValues = [email,password];
        connection.query(queryText,queryValues,(err,result)=>{
            response.setHeader("Content-Type","application/json");
    
            if(err==null)
            {
                // if(result.length>0){
                    console.log("Login Successful...");
                    response.write(JSON.stringify(result));
                    // response.json({ message: "Login successful", user: result[0] });
                    connection.end();
                    response.end();
                // }
                // else{
    
                //     console.log("Incorrect Login");
                // }
            }
    
            else
            {
                console.log("Login failure...");
    
                connection.write(JSON.stringify(err));
                connection.end();
                response.end();
            }
        })
    })
    
//Search Specefic user using Id
app.get("/airbnb/user/profile/:id",(requestuest,response)=>{

    const userId = requestuest.params.id;
    var connection = mysql.createConnection(connectionString);
    connection.connect();

    let queryText = `select * from user where id = ?`;
    let queryValues = [userId];
    console.log(queryValues);
    connection.query(queryText,queryValues,(err,result)=>{
        response.setHeader("Content-Type","application/json");
        console.log(result);
        if(err==null)
        {
        
            response.write(JSON.stringify(result));
            connection.end();
            response.end();
        }

        else
            {
                connection.write(JSON.stringify(err));
                connection.end();
                response.end();
            }
    })
    
})

app.put("/airbnb/user/profile/:id",(requestuest,response)=>{
    var id=requestuest.params.id;
    var firstName=requestuest.body.firstName;
    var lastName=requestuest.body.lastName;
    var email=requestuest.body.email;
    var password=requestuest.body.password;
    var phoneNumber=requestuest.body.phoneNumber;

    var connection = mysql.createConnection(connectionString);
    connection.connect();

    // let queryText = `update user set firstName = '${firstName}',
    //                                  lastName = ${lastName},
    //                                  email = ${email},
    //                                  password = ${password},
    //                                  phoneNumber = ${phoneNumber} where id = ${id}`;

    let queryText = `update user set firstName = ?,
                                     lastName = ?,
                                     email = ?,
                                     password = ?,
                                     phoneNumber = ? where id = ?`;
    let queryValues = [firstName,lastName,email,password,phoneNumber,id];


    // console.log(queryValues);
    connection.query(queryText,queryValues,(err,result)=>{
        response.setHeader("Content-Type","application/json");

        if(err==null)
        {
            response.write(JSON.stringify(result));
            connection.end();
            response.end();
        }
        else
        {
            response.write(JSON.stringify(err));
            connection.end();
            response.end();
        }
    })
})

//Update user using Id
app.put("/user/:id",(requestuest,response)=>{

    var id=requestuest.params.id;
    var firstName=requestuest.body.firstName;
    var lastName=requestuest.body.lastName;
    var email=requestuest.body.email;
    var connection=mysql.createConnection(connectionString);
    connection.connect();

    var queryText=`Update user set firstName=?,lastName=?,email=? where id=?`;
    var queryValues=[firstName,lastName,email,id];
    

    connection.query(queryText,queryValues,(err,result)=>{

        if(err==null)
            {
                response.write(JSON.stringify(result));
                connection.end();
                response.end();
                
            }
            else
            {
                response.write(JSON.stringify(err));
                connection.end();
                response.end();
                
            }
    })

})

//Delete user using Id
app.delete("/user/:id",(requestuest,response)=>{

    var id=requestuest.params.id;
    var connection=mysql.createConnection(connectionString);
    connection.connect();

    var queryText=`Delete from user where id= ?`;
    var queryValues=[id];
    

    connection.query(queryText,queryValues,(err,result)=>{

        if(err==null)
            {
                response.write(JSON.stringify(result));
                connection.end();
                response.end();
                
            }
            else
            {
                response.write(JSON.stringify(err));
                connection.end();
                response.end();
                
            }
    })

})


//=====================================================================================
//-----------------------4 Property Functionality------------------------------------
//=====================================================================================

app.post('airbnb/property',(request,res)=>{
    const categoryId = request.body.categoryId;
    const title = request.body.title;
    const details = request.body.details;
    const address = request.body.address;
    const contactNo = request.body.contactNo;
    const ownerName = request.body.ownerName;
    const isLakeView = request.body.isLakeView;
    const isTV = request.body.isTV;
    const isAC = request.body.isAC;
    const isWifi = request.body.isWifi;
    const isMiniBar = request.body.isMiniBar;
    const isBreakfast = request.body.isBreakfast;
    const isParking = request.body.isParking;
    const guests = request.body.guests;
    const bedrooms = request.body.bedrooms;
    const beds = request.body.beds;
    const bathrooms  =request.body.bathrooms;
    const rent = request.body.rent;
    const profileImage = request.body.profileImage;

    
   

    let connection = mysql.createConnection(connectionString);

    connection.connect();

    let queryText = `insert into property (
        categoryId,
        title,
        details,
        address,
        contactNo,
        ownerName,
        isLakeView,
        isTV,
        isAC,
        isWifi,
        isMiniBar,
        isBreakfast,
        isParking,
        guests,
        bedrooms,
        beds,
        bathrooms,
        rent,
        profileImage,
        createdTimestamp
    ) values (
        '${categoryId}',
        '${title}',
        '${details}',
        '${address}',
        '${contactNo}',
        '${ownerName}',
        ${isLakeView},
        ${isTV},
        ${isAC},
        ${isWifi},
        ${isMiniBar},
        ${isBreakfast},
        ${isParking},
        ${guests},
        ${bedrooms},
        ${beds},
        ${bathrooms},
        ${rent},
        '${profileImage}',
        CURRENT_TIMESTAMP
        
    )`;


    connection.query(queryText,(err,result)=>{
        if(!err){
            res.write(JSON.stringify(result));
            connection.end();
            res.end();
        }
        else{
            res.write(JSON.stringify(err));
            connection.end();
            res.end();
        }
        
    })
})


app.get('airbnb/property',(request,res)=>{
    let connection = mysql.createConnection(connectionString);
    connection.connect();

    let queryText = `select * from property`;
    connection.query(queryText,(err,result)=>{
        if(!err){
            res.json(result);
            connection.end();
            res.end();
        }
        else{
            res.json(err);
            connection.end();
            res.end();
        }
    })
})

app.post('airbnb/category',(request,res)=>{
    const title = request.body.title;
    const details = request.body.details;
    const image = request.body.image;



    let connection = mysql.createConnection(connectionString);
    connection.connect();

    let queryText = `insert into category (title,details,image,createdTimestamp) values ('${title}','${details}','${image}',CURRENT_TIMESTAMP )`;

    connection.query(queryText,(err,result)=>{
        if(!err){
            res.json(result);
            connection.end();
        }
        else{
            res.json(err);
            connection.end();
        }
    })



})

app.post('airbnb/booking',(request,res)=>{
 
    const propertyId = request.body.propertyId;
    const fromDate = request.body.fromDate;
    const toDate = request.body.toDate;
    const total = request.body.total;

    const connection = mysql.createConnection(connectionString);
    connection.connect();

    let queryText  = `insert into bookings (userId,propertyId,fromDate,toDate,total) values (${id},
        ${propertyId},
        '${fromDate}',
        '${toDate}',
        ${total})`;

    connection.query(queryText,(err,result)=>{
        if(!err){
            res.json(result);

        }
        else{
            res.json(err);
        }
    })

    

    



})

app.get('airbnb/booking',(request,res)=>{

    let connection = mysql.createConnection(connectionString);
    connection.connect();

    connection.query(`select * from bookings`,(err,result)=>{
        if(!err){
            res.json(result);
        }
        else{
            res.json(err);
        }
    })



    
})

app.listen(3000,()=>{
    console.log("Server is Started...");
})