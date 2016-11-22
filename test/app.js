var airi = new Airi({
	elm: "app",
	data: {
		message: "Hello World"
	},
	methods: {
		handleClick: function() {
			alert("Clicked")
		}
	},
	template: "<div>\
							{{message}}\
							<button ai-on:click='handleClick'></button>
						</div>"
});