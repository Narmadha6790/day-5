import axios from "axios";

export function fetchUsers(){

  return function(dispatch){
   axios.get('http://localhost:8080/Empservice/rest/empService/fetchAllEmps')
        .then((response) =>{
          dispatch({type:'FETCH_USERS_FULFILLED', payload:response.data.data});
        })
        
  }

      var jsondata=[{ "id":1,"name":"John", "age":31, "city":"New York"},{ "id":2,"name":"John", "age":31, "city":"New York"} ]
      dispatch({type:'FETCH_USERS_FULFILLED', payload:jsondata});
       
  
}
