const defaultConfig = {
	elm: "app",
	data: {},
	methods: {},
	template: ""
};

class Instance {

	constructor(config = defaultConfig) {

		/* Pass Configuration to Instance */
		this.data 		= config.data;
		this.methods 	= config.methods;
		this.elm 			= document.getElementById(config.elm);
		this.template = config.template;

		/* Initial a instance */
		this.init()
	}

	init() {

		/* Render */
		this.render()
	}

	render() {
		/* render a template */
		this.elm.innerHTML = this.template
	}
}

export default Instance;