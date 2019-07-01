class Counter extends React.Component {
	constructor(props) {
		super(props);

		this.handleAddOne = this.handleAddOne.bind(this);
		this.handleMinusOne = this.handleMinusOne.bind(this);
		this.handleReset = this.handleReset.bind(this);

		this.state = {
			count: 0
		};
	}

	componentDidMount() {
		const stringCount = localStorage.getItem("count");
		const count = parseInt(stringCount, 10);
		if (!isNaN(count)) {
			this.setState(() => ({ count }));
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.count !== this.state.count) {
			localStorage.setItem("count", this.state.count);
		}
	}

	handleAddOne() {
		this.setState(prevState => {
			return { count: prevState.count + 1 };
		});
	}

	handleMinusOne() {
		this.setState(prevState => {
			return { count: prevState.count - 1 };
		});
	}

	handleReset() {
		this.setState(() => {
			return { count: 0 };
		});
	}

	render() {
		return (
			<div>
				<h1>Count: {this.state.count}</h1>
				<button onClick={this.handleAddOne}>+1</button>
				<button onClick={this.handleMinusOne}>-1</button>
				<button onClick={this.handleReset}>reset</button>
			</div>
		);
	}
}

ReactDOM.render(<Counter />, document.getElementById("app"));

// ----------------------------------------------------------------
// OLD CODE
// ----------------------------------------------------------------

// const appRoot = document.getElementById("app");

// var count = 0;

// var addOne = function addOne() {
// 	count = count + 1;
// 	renderCounterApp();
// };

// var minusOne = function minusOne() {
// 	count = count - 1;
// 	renderCounterApp();
// };

// var reset = function reset() {
// 	count = 0;
// 	renderCounterApp();
// };

// /**
//  * React doesn't have built-in data binding. Thus, if data change, we need
//  * to rerender the application manually!!
//  */
// var renderCounterApp = function renderCounterApp() {
// 	var templateTwo = React.createElement(
// 		"div",
// 		null,
// 		React.createElement("h1", null, "Count: ", count),
// 		React.createElement("button", { onClick: addOne }, "+1"),
// 		React.createElement("button", { onClick: minusOne }, "-1"),
// 		React.createElement("button", { onClick: reset }, "reset")
// 	);
// 	ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();
