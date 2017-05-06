import React from "react";
var nav = [
  {
    view: "week",
    label: "Week",

  },

  {view: "month",
   label: "Month",

  }
];

class AppNav extends React.Component{
  constructor (){
    super(...arguments);
    this.state={viewName: false};
  }
  handleClick(view){
    this.setState({viewName: view});
    this.props.onViewChange(view);
  }
	render(){
		return <div>
    <h3>{this.props.navTitle}</h3>
			<nav>
            	<ul>
            		<li><a onClick={this.handleClick.bind(this, "year")} href="#">Year</a>
            		</li>
              	<li><a onClick={this.handleClick.bind(this, "month")} href="#">Month</a>
                </li>
                <li><a onClick={this.handleClick.bind(this, "week")} href="#">Week</a>
                </li>
                <li><a onClick={this.handleClick.bind(this, "day")} href="#">Day</a>
                </li>
            	</ul>
			</nav>
				</div>
	}

}
export default AppNav;