import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";

class About extends Component
{
    constructor(props)
    {
        super(props);

    }

    componentDidMount()
    {

    }
    
    render()
    {
        return(
            <div>
            <h1>About</h1>
            <h2>This is Namaste React web series</h2>
            <User name={"Vishwas Lakhmani (classs"} location={"Delhi Class"}/>
            {/* <UserClass name={"Vishwas Lakhmani (classs)"} location={"Delhi Class"}/> */}
        </div>
        );
    }
}

export default About;