import React, { Component } from 'react';
import Header from './Header';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import SubmitToAPI from '../Utils/SubmitToAPI'
class App extends Component {
  render(){
  return (
    <div className="App">
      <div className="container">
        <Header/>
        <div className="row"> <p> </p></div>
        <div className="row">
          <div className="col s4">
            <iframe width="800" height="1000" src= "https://forms.office.com/Pages/ResponsePage.aspx?id=oZ4s1SF8sUeCozOnSx90uDOoA1qY0jdJh4Aan-8kPr9UN0FOWlVDRFVaTVJWRExaQTM5WjA5T1dRVC4u&embed=true" allowFullScreen={true} webkitallowfullscreen="true" mozallowfullscreen="true" msallowfullscreen="true"> </iframe>
          </div>
          <div className="right col s4 offset-s1 valign-wrapper">
            <form method="POST" action="https://prod-68.westus.logic.azure.com:443/workflows/2b86a6dc22754acf977b112b55111438/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=1JKvXOAff8ryiSeNIADbah9w4RM2vla2ZsTi-TFHdbk"> 
              <button className="waves-effect waves-light btn" type="submit" onClick={e=>SubmitToAPI(e)}>Download Candidate Response</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
  }
}

export default App;
