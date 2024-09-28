import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Toast from 'vue-toastification';
import { createStore } from 'vuex';

import 'vue-toastification/dist/index.css';

import '@/assets/css/style.css';
import '@/assets/main.css';
import 'primeicons/primeicons.css';

const app = createApp(App);

const store = createStore({
	state() {
		return {
			isAdmin: false,
		};
	},
	mutations: {
	    auth(state) {
			state.isAdmin = !state.isAdmin;
			if(state.isAdmin === false){
				router.push('/');
			}
		},
	},
});

app.use(router);
app.use(Toast);
app.use(store);

app.mount('#app');
