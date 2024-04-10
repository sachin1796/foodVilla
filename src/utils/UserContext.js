import { createContext }  from "react";


const userContext = createContext({
       user:{
        name:"Sachin",
        email:"s@v.com"
       },
       user2:{
        name:"SachinVish",
        email:"s@v.com"
       }
})

export default userContext;