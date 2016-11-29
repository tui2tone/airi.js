var airi = new Airi({
	elm: "app",
	data: {
		message: "Hello World",
		counter: 1
	},
	methods: {
		handleClick: function(e) {
			this.data.counter++;
		}
	},
	template: "<div>\
						  <section class=\"section\">\
						    <div class=\"container\">\
						      <div class=\"heading\">\
						        <h1 class=\"title\">Airi.js</h1>\
						        <h2 class=\"subtitle\">\
						          Simple Javascript Frontend Framework\
						        </h2>\
						      </div>\
						      <hr/>\
						      <div class=\"content\">\
		  							<h3>#Display Value</h3>\
										<p>{{message}}</p>\
									</div>\
						      <hr/>\
						      <div class=\"content\">\
		  							<h3>#Event Binding</h3>\
										<p>Counter: {{counter}}</p>\
										<button ai-on:click=\"handleClick\">Increment</button>\
									</div>\
						      <hr/>\
						      <div class=\"content\">\
		  							<h3>#Model Binding</h3>\
										<input ai-model=\"message\"/>\
									</div>\
						    </div>\
						  </section>\
						</div>"
});