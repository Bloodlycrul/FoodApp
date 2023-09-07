import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    console.log('This is an mounted component')
  }

  render() {
    console.log('Hey, Buddy you forget me');
    const { name, location, jd } = this.props;
    return (
      <>
        <div>
          <h1>{name}</h1>
          <h2>{location}</h2>
          <p>{jd}</p>
        </div>
      </>
    );
  }
}

export default UserClass;