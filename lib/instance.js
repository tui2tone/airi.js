import { RenderTemplate, RenderDOM } from './template';

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

		this.callback = this.callback.bind(this)

		/* Initial a instance */
		this.init()
	}

	init() {

		/* methods binding */
		this.binding()
		this.watch()

		/* Render */
		this.renderDOM()
		this.render()
	}

	watch() {
	}

	binding() {
		for(var key in this.methods) {
			this.methods[key] = this.methods[key].bind(this)
		}
	}

	renderDOM() {
		/* render a template */
		const DOM = RenderTemplate(this.template, this.data, this.methods, this.callback)
		this.elm.appendChild(DOM)
	}

	callback() {
		this.render()
	}

	render() {
		RenderDOM(this.elm, this.data)
	}

	/* Life Cycle */
	update() {
		this.render(this.elm, this.data)
	}
}

export default Instance;