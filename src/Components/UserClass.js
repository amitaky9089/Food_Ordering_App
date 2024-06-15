// this is example of class based component
import React from "react"
class UserClass extends React.Component{
    constructor(props){
        super(props);
        
        // creating state variable 
        // state is a reserve keyword and this.state is big object and count is our state varibale now
        this.state={
            userInfo:{
                name:"dummy",
                location:"default",
            }
        };
      //  console.log(this.props.name+ "child consturctor")
    };
  
    async componentDidMount(){
       const data= await fetch("https://api.github.com/users/amitaky9089");
       const json= await data.json();
    //    console.log(json);
       this.setState(
        {userInfo:json}
       );
     }

    //  componentDidUpdate(){
    //     console.log("component did update");
    //    } 
    
    //   componentWillUnmount(){
    //     console.log("component will unmount")
    //   }

    render() {
        const{name,login}=this?.state?.userInfo; 
      //  console.log(this.props.name  +"child render")
        return (
          <div className="user-card">
             <h2>{name}</h2>
             <h3>Username: {login}</h3>
             <h3>Contact: bossaky9089</h3>
          </div>
        )
}
}

export default UserClass;