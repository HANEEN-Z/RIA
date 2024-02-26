import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export class SideBarMenu extends Component {
  render() {
    return (
      <div>
        <br /><br /><br />
        <div>          
           <div class="list-group">
             <Link to="/about" class="list-group-item list-group-item-action"><i class="fa fa-user-friends">About us</i></Link>
             <Link to="/" class="list-group-item list-group-item-action"><i class="fa fa-cog">Settinge</i></Link>
             <Link to="/contact_us" class="list-group-item list-group-item-action"><i  class="fa fa-envelope">Contact us</i></Link>
            </div>
        </div>
    </div>
    )
  }
}

export default SideBarMenu
