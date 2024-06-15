import User from "./User";
import UserClass from "./UserClass";
import React from "react";
// import { Component } from "react";
// for upper we have to write like class About extends component

class About extends React.Component{
     
    constructor(props){
        super(props)
      //  console.log("parent constructor")
    }
    

    componentDidMount(){
      //  console.log("Parent componentDidMount")
    }
    render(){
      //  console.log("parent render")
        return (
                    <div>
                       <h1>This is about us page.</h1>
                       <h2>I am learning react here.</h2>
                       {/* <User name={"Amit functional component"}/> */}
                       <UserClass name={"first"} location={"Dehradun"}/>
                     
                    </div>
        )
    }
}

// const About=()=>{
//     return (
//         <div>
//            <h1>This is about us page.</h1>
//            <h2>I am learning react here.</h2>
//            {/* <User name={"Amit functional component"}/> */}
//            <UserClass name={"Amit class component"} location={"Bikaner class"}/>
//         </div>
//     )
// }

export default About;

