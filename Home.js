function Home() {
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
      ['Mushrooms', 3],
      ['Onions', 1],
      ['Olives', 1],
      ['Zucchini', 1],
      ['Pepperoni', 2]
    ]);

    var options = {'title':'How Much Pizza I Ate Last Night',
                  'width':400,
                  'height':300};

    var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    chart.draw(data, options);
  }

  return (
    <div className='content'>
      <h2>Home</h2>
      <Clock/>
      <Calculator/>
      <Para/>
      <Toggle/>
      <div id="chart_div"></div>
    </div>
  );
}

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};
  }

  handleChange(e) {
    this.setState({temperature: e.target.value});
  }

  render() {
    const temperature = this.state.temperature;
    return (
      <fieldset>
        <legend>Enter temperature in Celsius:</legend>
        <input
          value={temperature}
          onChange={this.handleChange} />

        <BoilingVerdict
          celsius={parseFloat(temperature)} />

      </fieldset>
    );
  }
}

// function 일때는 return 만
function Textt(props) {
  return(
    <p>{props.text}</p>
  )
}

// class 일때는 render
class Para extends React.Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {index:0, text: 'bye'};
  }

  handleChange(e){
    if(this.state.index == 0){
      this.setState({index:this.state.index + 1 , text: 'hello'})
    }else if (this.state.index == 1) {
      this.setState({index:this.state.index + 1 , text: 'hellohello'})
    }else{
      this.setState({index:0 , text: 'bye'})
    }
  }

  render(){
    return(
      <div>
        <Textt text='lelel'/>
        <p onClick={this.handleChange}>{this.state.text}</p>
      </div>
    )
  }
}

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: false};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState(state =>({
      isToggleOn: !this.state.isToggleOn
    }))
  }

  render(){
    return(
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}