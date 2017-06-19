<template>
	<div>
		
		<div class="page-header">
			<i class="fa fa-cube"></i>{{title}}
		</div>
		
		<div v-if="collections.length">
			{{ collections }}
		</div>

		<div v-else-if="formShown" class="mg-top-25">

			<div class="container">
				<h4>Create new collection</h4>
				<div class="col-md-6">
					<div class="col shadow">

						<div class="input">
							<label for="collection_name">Collection Name</label>
							<input id="collection_name" type="text">
						</div>

						<div class="input">
							<label for="table_name">Table Name</label>
							<input id="table_name" type="text">
						</div>
						<button class="btn-green">Create collection</button>

						<p class="notice">Collections are data-models of real-world information that could be stored. For example, a <span class="tag-pressed">Student</span> collection consisting of multiple fields such as name, class, email, date of birth, and so on.</p>
						<p class="notice">This collection would then be accessible as a model, which makes it possible to insert records based off that very model's structure, as mapped out in this interface. </p>

						<br>Read more in the <a href="#">docs</a></p>
					</div>
				</div>
				<div class="col-md-6">
					<div class="col shadow">
						<label>Fields</label>

						<table>
							<thead>
								<th>Field Name</th>
								<th>Field Type</th>
								<th>Options</th>
							</thead>

	
							<!-- <tbody>
								<tr><td>kappa </td><td>bronco</td> <td><i class="fa fa-edit"></i><i class="fa fa-remove"></i></td></tr>
								<tr><td>kappa </td><td>bronco</td> <td></td></tr>
							</tbody> -->
						</table>

					</div>
				</div>
			</div>
		</div>

		<div v-else>
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
			store(){
				return store;
			}
		},
		data(){
			return{ 
				title: 'Collections',
				formShown: true,

			}
		},
		methods:{
			showCreateCollectionForm(){

				this.formShown = true;
				alert(formShown);
			}
		}


	}	
</script>

<style lang="scss" scoped>
	table{
		width:100%; margin:10px 0;
		border-spacing: 0;
		thead{background:red;background: #e7edf3;font-size: 11px;}
		thead th { text-align:left; padding: 8px 6px;}
		tbody td { padding: 8px 6px; }
		tbody tr:nth-child(odd) {
			background: #f9f9f9;
		}
		tbody td:last-of-type{
			i{
				padding: 2px;
				margin-right: 5px;
				font-size: 14px;
				opacity:.7;
				transition:.3s;
				&:hover{
					cursor:pointer;
					opacity:1;
				}
			}
		}
	}
	.notice{
		border-left: 3px solid #e3f2ff;
		padding: 12px 10px;
		width: 95%;
	}
	.tag-pressed{
		font-size: 11px;
		background: #f1f0f0;
		padding: 0 4px;
		border-radius: 4px;
		color: #7359bf;
	}
	.input{
		padding-bottom:20px;
		&:last-of-type{
			padding-bottom:5px;
		}
	}
</style>