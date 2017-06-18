import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {

	collections: []

	},
	getters: {
		collections(state) {
			return state.collections;
		}
	},
	mutations: {

	},
	actions: {

	}
});