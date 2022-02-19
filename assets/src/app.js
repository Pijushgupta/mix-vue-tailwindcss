import { createApp} from 'vue/dist/vue.esm-bundler.js';

const app = createApp({
	template:`<welcome />`,
	components:['welcome'],

})

app.component('welcome',{
	
	data: function () {
		return {
			message: 'Laravel Mix, Vue(view) and Tailwindcss'
		}
	},
	template: `<div class="flex justify-center items-center h-screen ">
	<div class="w-1/3 h-48 flex flex-col items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500">
	<h1 class="font-semibold text-xl text-white tracking-wider " >{{message}}</h1>
	<p class="mt-4 text-white font-light tracking-wider uppercase text-xs">by Pijush Gupta</p>
	</div>
	</div>`,

	
})



app.mount('#app');