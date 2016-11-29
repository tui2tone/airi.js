import { DataParser, MethodParser } from './parser'

/* Play with DOM */
export function RenderTemplate(template, data, method, callback) {
	const parsingData 	= DataParser(template)
  const DOM 					= str2DOMElement(parsingData)
	const parsingMethod = MethodParser(DOM, data, method, callback)

	return DOM
}

export function RenderDOM(dom, data) {
	for(var key in data) {
		const nodeList = document.querySelectorAll('[bind="' + key + '"]');
		Array.prototype.forEach.call(nodeList, (el) => {
			switch(el.tagName) {
				case "INPUT":
					el.value = data[key]
					break;
				default:
					el.innerHTML = data[key]
					break;
			}
		})
	}
	return dom
}

var str2DOMElement = function(html) {
  var frame = document.createElement('iframe');
  frame.style.display = 'none';
  document.body.appendChild(frame);             
  frame.contentDocument.open();
  frame.contentDocument.write(html);
  frame.contentDocument.close();
  var el = frame.contentDocument.body.firstChild;
  document.body.removeChild(frame);
  return el;
}

// Data Only
// export function RenderTemplate(template, data) {
// 	const getDataBinding = template.match(/{{(.*)}}/);
// 	const rendered = template.replace(getDataBinding[0], data[getDataBinding[1]])

// 	return rendered
// }