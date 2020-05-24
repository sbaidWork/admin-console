import React, { Component } from 'react';
import Header from './Header';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

class App extends Component {
  render(){
  return (
    <div className="App">
      <div className="container">
        <Header/>
        <div className="row"> <p> </p></div>
        <div className="row">
          <div className="col s4">
            <iframe width="800" height="1000" src= "https://forms.office.com/Pages/ResponsePage.aspx?id=oZ4s1SF8sUeCozOnSx90uDOoA1qY0jdJh4Aan-8kPr9UN0FOWlVDRFVaTVJWRExaQTM5WjA5T1dRVC4u&embed=true" allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>
          </div>
          <div className="right col s4 offset-s1 valign-wrapper">
            <a class="waves-effect waves-light btn">Download Candidate Response</a>
          </div>
        </div>
      </div>
    </div>
  );
  }
}

export default App;
