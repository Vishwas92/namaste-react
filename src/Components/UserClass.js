import React from 'react';
class UserClass extends React.Component{
    constructor(props)
    {
        super(props);

        this.state = {
            userInfo : {
                name: "Dummy",
                location: "Default",
            },
            count: 0,
        }
        console.log(props);
    }
    
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();
        this.setState({
            userInfo : json
        })

        this.timer = setInterval(() => {
            console.log("NAMASTE REACT OP")
        }, 1000);
        console.log(json);
    }

    componentDidUpdate()
    {
        console.log("Component Did Update is called");
    }

    componentWillUnmount()
    {
        clearInterval(this.timer);
        console.log("Component Will Unmount");
    }

    render() {
        const { name, location, avatar_url } = this.state.userInfo;
        const {count} = this.state;
        return(
            <div className="user-card">
            <img src={avatar_url}></img>
              <h1>Name: {name}</h1>
              <h1>Count : {count}</h1>
              <button onClick={() => {
                this.setState({
                    count: this.state.count + 1
                })
              }}>Increment</button>
              <h2>Location: {location}</h2>
              <h3>Contact: @akshaymarch7</h3>
            </div>
        );
    }
}

export default UserClass;