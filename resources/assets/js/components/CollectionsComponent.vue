<template>
	<div>
		
		<div class="page-header">
			<i class="fa fa-cube"></i>{{title}}
		</div>
		
		<div v-if="noCollectionsAndFormNotShownYet">
			{{ collections }}
		</div>

		<div v-else class="mg-top-25">
			<div  class="blockquote shadow noselect">
				<p>There are currently no collections, would you like to create one?</p>
				<button @click="showCreateCollectionForm" class="btn-green mg-top-25">Create collection</button>
			</div>
		</div>


		

	</div>
</template>

<script>
	import store from '../store.js'
	export default {
		computed: {
			collections(){
				return store.getters.collections;
			},
			noCollectionsAndFormNotShownYet(){
				return (store.getters.collections.length && this.formShown)
			},
			store(){
				return store;
			}
		},
		data(){
			return{ 
				title: 'Collections',
				formShown: false
			}
		},
		methods:{
			showCreateCollectionForm(){
				this.formShown = true;
			}
		}


	}	
</script>

<style>
	
</style>