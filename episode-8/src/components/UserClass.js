import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props);
        console.log(props);

        this.state = {
          userInfo : {
            name: "dummy",
            location: "Default"
          }
        };

        // console.log(this.props.name + " Child Constructor");
    }

    async componentDidMount() {
      // console.log(this.props.name + " Child component Did Mount");
      // API call
      const data = await fetch("https://api.github.com/users/pritamrajput");
      const json = await data.json();

      this.setState({
        userInfo:json,
      })

      console.log(json);
      
    }

   componentDidUpdate(){

    console.log("Component Did Update");
     
   }

   componentWillUnmount(){
     console.log("Component will unmount called");
     
   }

   render(){
    
    // console.log(this.props.name +" Child Render");
    
     const {name, location,twitter_username, avatar_url} = this.state.userInfo;

     return  (
        <div key={"1"} className="user-card">
             <img src={avatar_url}></img>
             <h2>Name : {name}</h2>
             <h3>Location : {location}</h3>
             <h4>Contact : {twitter_username}</h4> 
        </div>
     );
   }

}

export default UserClass;

/**
 * 
 * ---- MOUNTING CYCLE ------
 * 
 * Constructor (dummy)
 * Render (dummy)
 *    <HTML> loaded with dummy data
 * Component Did Mount
 *    <API Call>
 *    <this.setState>
 * 
 * ----- UPDATE 
 * 
 *   Render(API data)
 *   <HTML> loaded with new API data
 *   Component Did Update
 * 
 * 
 * 
 */