import React from 'react';
import { Link } from 'react-router';

class Authbar extends React.Component{

  constructor(props){
    super(props);
    this.variableButtons = this.variableButtons.bind(this);
    this.fewTags = this.fewTags.bind(this);
  }

  variableButtons(){
    if(this.props.currentUser) {
      return (
        <div className="authbuttons">
          <div className="greet">Logged in as: <div className="name"><Link to={"/users/"+this.props.currentUser.id}>{this.props.currentUser.name}</Link></div></div>
          <button className="authbutton topbutton logoutbutton" onClick={this.props.logout}>Log Out</button>
          <Link to="/upload"><button className="uploadbutton topbutton">Upload</button></Link>
        </div>
      );
    } else {
      return (
        <div className="authbuttons">
          <Link to="/signup"><button className="authbutton topbutton">Register</button></Link>
          <Link to="/login"><button className="authbutton topbutton">Log In</button></Link>
          <button className="authbutton topbutton troll" onClick={this.props.loginGuest}>Troll</button>
        </div>
      );
    }
  }

  fewTags(){
    return (
      <div className="tagbuttons">
        <Link to="/hot"><button className="tagbutton topbutton">Hot</button></Link>
        <Link to="/fresh"><button className="tagbutton topbutton">Fresh</button></Link>
        <Link to="/tagged/animals"><button className="tagbutton topbutton">Animals</button></Link>
        <Link to="/tagged/fwp"><button className="tagbutton topbutton">FWP</button></Link>
        <Link to="/tagged/vintage"><button className="tagbutton topbutton">Vintage</button></Link>
      </div>
    );
  }

  render(){
    return (
      <header className="topbar group">
        <nav className="widthcontainer">
          <h4 className="logo"><Link to="/memes"><img src='http://res.cloudinary.com/dujcpxlhk/image/upload/v1473100469/f9gvavsmmgeemiyun6jp.png' id="logoimage" /></Link></h4>
          { this.fewTags() }
          { this.variableButtons() }
        </nav>
      </header>
    );
  }

}

export default Authbar;
