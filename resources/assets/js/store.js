import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		dataTypes : [
		'string',
		'number',
		'email',
		'date',
		'password',
		'telephone',
		'address',
		'text'
		],
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
		},
		dataTypes(state){
			return state.dataTypes;
		}
	},
	mutations: {

	},
	actions: {

	}
});