import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {

    constructor(props){
     super(props);

     console.log("Parent Constructor");
     
    }

    componentDidMount() {
        console.log("Parent Child component Did Mount");
        
      }

    render() {
        console.log("Parent Render");
        
        return (
            <div>
            <h1>About class component</h1>
            <h2>This is namaste react web series</h2>
            <UserClass name={"First"} location={"Dehradun"} contact = {"@Impritam18"}/>
            <User/>
        </div>
        );
    };
}


/**
 * - Parent constructor
 * - Parent render
 * 
 *   - First constructor
 *   - First render
 *
 * 
 *   - Second constructor
 *   - Second render
 * 
 *   <DOM updated - In SINGLE BATCh>
 *   - First component Did mount
 *   - Second component Did mount
 * 
 * - Parent component Did mount
 */

export default About;