import React, { Component } from 'react';
import AppNav from './AppNav.js';
import '../css/App.css';
import '../scss/App.scss';
import Year from './Year.js';
import Month from './Month.js';
import Week from './Week.js';
import Day from './Day.js';


class App extends Component {
  handleViewChange(newView){
    console.log("View set to "+ newView);

    this.setState({viewName: newView});



  }
  constructor(){
    super(...arguments);
    this.state={
      viewName: "week"
    };
  }
  render() {
    var viewElement= null;
    if(this.state.viewName== "year"){ 
        viewElement= <Year />;
    } else if (this.state.viewName == "month"){
      viewElement= <Month />;
    } else if (this.state.viewName == "week"){
      viewElement= <Week />;
    } else if (this.state.viewName == "day"){
      viewElement= <Day />;
      }
    return (

      <div className="App">
        <header> 
          <AppNav 
            navTitle="nav Menu"
            onViewChange={this.handleViewChange.bind(this)} />
          <h1 className="pageHeader">Calendar Plex App</h1>





        </header>  
        <section>
          
          {viewElement}

        </section> 
      </div>
    );
  }
}

export default App;
