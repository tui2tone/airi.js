// export function RenderTemplate(template, data) {
// 	const getDataBinding = template.match(/{{(.*)}}/);
// 	const rendered = template.replace(getDataBinding[0], data[getDataBinding[1]])

// 	return rendered
// }

/* Play with DOM */
export function RenderTemplate(template, data) {
	const getDataBinding = template.match(/{{(.*)}}/);
	const rendered = template.replace(getDataBinding[0], data[getDataBinding[1]])

	return rendered
}

// Data Only
// export function RenderTemplate(template, data) {
// 	const getDataBinding = template.match(/{{(.*)}}/);
// 	const rendered = template.replace(getDataBinding[0], data[getDataBinding[1]])

// 	return rendered
// }