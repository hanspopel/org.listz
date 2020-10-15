import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import data from './Navibar.json';
import * as ROUTES from '../../constants/routes';
import '../../css/navigation.css'

export default class Navigation extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          data: data,
      };
  }

  nav = React.createRef();

  // componentDidMount() {
  //     window.addEventListener('scroll', this.handleScroll, true);
  //     this.nav.current.classList.add('ref={this.nav}');
  //     if (!this.nav.current) {
  //         return;
  //     }
  //     var lastScrollY = window.scrollY;
  //     if (!this.nav.current) {
  //         return;
  //     }
  //     if (lastScrollY != 0) {
  //         // this.nav.current.classList.add('navbar-black');
  //     }
  // }

  // componentWillUnmount() {
  //     window.removeEventListener('scroll', this.handleScroll);
  //     this.nav.current.classList.remove('ref={this.nav}');
  //     if (!this.nav.current) {
  //         return;
  //     }
  // }

  // formatColor(r, g, b, a) {
  //     return `rgba(${r}, ${g}, ${b}, ${a})`;
  // }

  // applyColor(alpha_val) {
  //     const color = this.formatColor(0, 1, 1, alpha_val);
  //     //this.nav.current.style.color = 'rgba(1,1,1,1)';
  // }

  // handleScroll = () => {
  //     var lastScrollY = window.scrollY;
  //     if (!this.nav.current) {
  //         return;
  //     }
  //     //return;
  //     //this.applyColor(lastScrollY/100);
  //     if (lastScrollY == 0) {
  //         //this.nav.current.classList.add('navbar-transparent');
  //     }
  //     else {
  //         //this.nav.current.classList.add('navbar-black');
  //     }
  //     if (lastScrollY > 1) {
  //         //this.nav.current.classList.add('navbar-black');
  //     }
  //     else {
  //         //this.nav.current.classList.remove('navbar-black');
  //     }
  // };



  render() {

      let content;

      var user_list = this.state.data.user_list


      this.global_opacity = 1;
      let opac = "" + 1;
      var opac_local = "rgb(0,0,0," + this.global_opacity + ")";
      opac_local = "rgba(0,1,0,1)";
      opac_local = "blue";
      let bgcolor = 'blue';
      let user_popup_list = user_list.map(item_id => {
              return (
                  <div class="id-item">
                      <li class="nav-item textcolor_navbar">
                          <a class="nav-link textcolor_navbar" href="#" >{item_id.name}</a>
                      </li>
                  </div>
              )
      })

      return (
        <nav class="navbar navbar-expand-sm bg-light fixed-top ">
          <a class="navbar-brand" href="#"><img class="responsive-img" src="images/listz_web.png" width="80"></img></a>


        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
          aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="basicExampleNav">




        <ul class="navbar-nav mr-auto">

        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">Home</a>
        <div class="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>

      

      <li class="nav-item active">
      <Link class="nav-link" to={ROUTES.SIGN_IN}>Sign In
          <span class="sr-only">(current)</span>
          </Link>
      </li>
      <li class="nav-item">
      <Link class="nav-link" to={ROUTES.LANDING}>Landing</Link>
      </li>
      <li class="nav-item">
      <Link class="nav-link" to={ROUTES.HOME}>Home</Link>
      </li>
      <li class="nav-item">
      <Link class="nav-link" to={ROUTES.ACCOUNT}>Account</Link>
      </li>
      <li class="nav-item">
      <Link class="nav-link" to={ROUTES.ADMIN}>Admin</Link>
      </li>


      
      <form class="form-inline">
      <div class="md-form my-0">
        <input class="form-control ml-sm-2" type="text" placeholder="Search" aria-label="Search"></input>
        </div>
      </form>


    </ul>
    <ul class="navbar-nav ml-sm-2">
    <li class="nav-item">
      <Link class="nav-link" to={ROUTES.LANDING}>Landing</Link>
      </li>
      <li class="nav-item">
      <Link class="nav-link" to={ROUTES.HOME}>Home</Link>
      </li>
      <li class="nav-item">
      <Link class="nav-link" to={ROUTES.ACCOUNT}>Account</Link>
      </li>
      <li class="nav-item">
      <Link class="nav-link" to={ROUTES.ADMIN}>Admin</Link>
      </li>



    </ul>

      </div>
        </nav>

      );
  }
}
