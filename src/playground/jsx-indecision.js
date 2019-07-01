//------------------------------------------------------------------------
// Use Live-Server to automatically load new page to browser
// $ live-server public
//
// Use babel to compile with react and modern ES support:
// $ babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
//------------------------------------------------------------------------

console.log("App.js is running!");

const appRoot = document.getElementById("app");

const app = {
	title: "Indecision App",
	subtitle: "Put your life in the hands of computer",
	options: []
};

const onFormSubmit = e => {
	// this will prevent default behavious which
	// in this case is full page refresh!
	e.preventDefault();

	// retrieve user value from option
	const option = e.target.elements.option.value;

	if (option) {
		app.options.push(option);
		e.target.elements.option.value = "";
		render();
	}
};

const onRemoveAll = () => {
	app.options = [];
	render();
};

const onMakeDecision = () => {
	const randomNum = Math.floor(Math.random() * app.options.length);
	const option = app.options[randomNum];
	alert(option);
};

const render = () => {
	const template = (
		<div>
			<h1>{app.title}</h1>
			{app.subtitle && <p>{app.subtitle}</p>}
			<p>{app.options.length > 0 ? "Here are your options:" : "No options"}</p>
			<button disabled={app.options.length === 0} onClick={onMakeDecision}>
				What should I do?
			</button>
			<button onClick={onRemoveAll}>Remove All</button>
			<ol>
				{app.options.map(option => (
					<li key={option}>{option}</li>
				))}
			</ol>
			<form onSubmit={onFormSubmit}>
				<input type="text" name="option" />
				<button>Add Option</button>
			</form>
		</div>
	);

	ReactDOM.render(template, appRoot);
};

render();
