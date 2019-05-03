run application using server.js file;

mongoDb running on port = 27018 so change it accordingly


1. fetch all user details using  - http://127.0.0.1:3000/users    --get method

2. fetch perticular user details by userId using - http://127.0.0.1:3000/userId   -- post method
            in body send id of user with id parameter:  
   ex :         {
	                "id": "5cc999ba8b85031f0be1f23e"
                }

3. add user by using - http://localhost:3000/user   --post method
        in body send  'name' , 'email'  , 'password'
        ex:     {
                    "name": "Akshay",
                    "email": "akshay@gmail.com",
                    "password": "akshay12345678"
                }

4. add vehical by using - http://127.0.0.1:3000/addVehical   --post method
         in body send  'id' (userID) , 'model', 'number' , 'brand'
        ex:     {
                    "id": "5cc999ba8b85031f0be1f23e",
                    "model": "V9",
                    "number":"MH-2019",
                    "brand":"HONDA"
                }