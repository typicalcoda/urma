import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {

		collections: [
		// {
		// 	name: 'Student',
		// 	tableName: 'tbl_student',
		// 	fields: [
		// 	{ fieldName: 'First name', dataType: 'string' },
		// 	{ fieldName: 'Last name', dataType: 'string' },
		// 	{ fieldName: 'Age', dataType: 'number' },
		// 	{ fieldName: 'Email', dataType: 'email' },
		// 	]
		// }

		]

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