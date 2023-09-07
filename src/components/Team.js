import { Component } from "react";

class Team extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          count: 0,
          count2: 1,
        };
    
        console.log('second I am calling Constructor');
      }
    
      componentDidMount(){
        console.log('second is an mounted component')
      }
    
      render() {
        console.log('nah, Buddy you forget me');
        const { name, location, jd } = this.props;
        const { count, count2 } = this.state;
        return (
          <>
            <div>
              <h1>{count}</h1>
              <h1>Count2 : {count2}</h1>
              <button onClick={()=>{
                this.setState({
                    count : this.state.count + 1,
                    count2 : this.state.count2 + 1
                })
              }}> Increase</button>
              <h1>{name}</h1>
              <h2>{location}</h2>
              <p>{jd}</p>
            </div>
          </>
        );
      }
}

export default Team