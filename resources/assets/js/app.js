import './bootstrap';
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import store from './store';
import MyNavComponent from './components/MyNavComponent';

Vue.use( VueRouter );

const router = new VueRouter({
	routes,
	mode: 'history'
})

const app = new Vue({
	components: {
		'my-nav' : MyNavComponent,
	},
	router,

	mounted(){
		axios({
			method: 'get',
			url: '/api/collections'
		}).then(function(res) {
			console.log(res);
		}).catch(function(err){
			console.log(err);
		})
	}
}).$mount('#app')