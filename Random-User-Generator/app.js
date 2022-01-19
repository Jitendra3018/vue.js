const app = Vue.createApp({
	// template: "<h1>Hello World</h1>",
	// template: "<h1>Hello {{firstName}}</h1>",
	data() {
		return {
			firstName: "John",
			lastName: "Doe",
			email: "John@gmail.com",
			gender: "male",
			picture: "https://randomuser.me/api/portraits/men/10.jpg",
		};
	},

	// All the event handler methods are defined here
	methods: {
		// To fetch the data from the API, we have to make this function asynchronous
		async getUser() {
			// console.log(this.firstName);
			const res = await fetch("https://randomuser.me/api/");
			// This below, will gives us only a single result, so we will just destructure it
			// const data = await res.json()
			const { results } = await res.json();
			// console.log(results);

			(this.firstName = results[0].name.first),
				(this.lastName = results[0].name.last),
				(this.email = results[0].email),
				(this.gender = results[0].gender),
				(this.picture = results[0].picture.large);
		},
	},
});

app.mount("#app");
