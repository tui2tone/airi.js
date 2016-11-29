import _ from 'underscore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';

export function DataParser(template) {

	const getDataBinding = template.match(/{{([^}}]+)}}/g);
	let parsed = template

	getDataBinding.map((item, index) => {
		const keyBinding = getDataBinding[index].replace("{{", "").replace("}}", "").trim()
		parsed = parsed.replace(getDataBinding[index], `<span bind="${keyBinding}"></span>`);
	})

	return parsed;
}

export function MethodParser(dom, data, methods, callback) {
	// const getEvent = document.getAttribute.match(/(i-on:).+\"/g)
	// let parsed = template
	const button = dom.getElementsByTagName("button")[0]
	var all = dom.getElementsByTagName("*");

	_.map(all, (item) => {

		/* Event Binding */
		extractEventBinding(item, (event) => {
			var source = Observable.fromEvent(item, event["event"]);
			source.subscribe(methods[event["method"]]);
			source.subscribe(callback);
		})

		/* Model Binding */
		extractModelBinding(item, (model) => {
			var source = Observable.fromEvent(item, 'keyup');
			source.subscribe((x) => {
				data[model['model']] = x.target.value
			});
			source.subscribe(callback);
		})
	})

	return dom
}

function extractEventBinding(dom, callback) {

	// console.log(dom.innerHTML)
	/* Event Binding */
	const getEvent = dom.outerHTML.replace(dom.innerHTML, "").match(/(ai-on:).+\"/g)

	if(getEvent !== null) {
		const event = getEvent[0].match(/:.+=/)[0].replace(":", "").replace("=", "")
		const method = getEvent[0].match(/".+"/)[0].replace("\"", "").replace("\"", "")

		callback({
			event: event,
			method: method
		})
	}
}

function extractModelBinding(dom, callback) {

	/* Model Binding */
	const getModel = dom.outerHTML.replace(dom.innerHTML, "").match(/(ai-model).+\"/g)
	if(getModel !== null) {
		const variable = getModel[0].match(/".+"/)[0].replace("\"", "").replace("\"", "")
		dom.setAttribute("bind", "message");
		callback({
			model: variable
		})
	}
}