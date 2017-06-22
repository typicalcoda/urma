<template>
	<div>
		
		<div class="page-header">
			<i class="fa fa-cube"></i>
			{{title}}
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
							<input id="collection_name" type="text" class="input" v-model="form.collectionName">
						</div>

						<div class="input">
							<label for="table_name">Table Name</label>
							<input id="table_name" type="text" class="input" v-model="form.collectionTableName">
						</div>
						<button @click="createCollection" class="btn-green">Create collection</button>

						<p class="notice">Collections are data-models of real-world information that can be stored. For example, a <span class="tag-pressed">Student</span> collection consisting of multiple fields such as name, class, email, date of birth, and so on.</p>
						<p class="notice">This collection would then be accessible as a model, which makes it possible to insert records based off that very model's structure, as mapped out in this interface. </p>

						<br>Read more in the <a href="#">docs</a></p>
					</div>
				</div>
				<div class="col-md-6">
					<div class="col shadow">
						<label>Fields</label>

						<table>
							<thead>
								<th width="40%">Field Name</th>
								<th width="30%">Field Type</th>
								<th width="30%">Options</th>
							</thead>


							<tbody>
								<tr v-for="field in form.fields" :class="{ active : field.active}">	
									<td>
										<input type="text" class="editable" @changed="verifyField" v-model="field.fieldName" :disabled="!field.active">
									</td>
									<td>
										<div class="dropdown-mask">
											<select v-model="field.dataType" @changed="verifyField" class="editable" :disabled="!field.active">
												<option value="[select type]">[select type]</option>
												<option v-for="dataType in store.getters.dataTypes" :value="dataType">{{dataType}}</option>
											</select>
										</div>
									</td>

									<td>
										<i class="fa" :class="field.active ? 'fa-check' : 'fa-edit'"></i>
										<i class="fa" :class="field.active ? 'fa-times' : 'fa-trash'"></i>
									</td>
								</tr>
							</tbody>
						</table>

						<div class="errors">
							
						</div>

						<button @click="addNewField" class="fa btn-circle plus"></button>
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
		components: {
			
		},
		data(){
			return{ 
				title: 'Collections',
				form: {
					collectionName: 'Test',
					collectionTableName: 'tbl_Test',
					fields: [
					{fieldName: 'Name', dataType: 'string', active:false},
					{fieldName: 'Age', dataType: 'number', active:false},
					]
				},
				formShown: true,
			}
		},
		computed: {
			collections(){
				return store.getters.collections;
			},
			store(){
				return store;
			}
		},
		methods:{
			showCreateCollectionForm(){
				this.formShown = true;
				alert(formShown);
			},
			addNewField(){
				this.form.fields.forEach(f=> f.active = false);
				let empty = {fieldName: 'New Field', dataType: '[select type]', active:true};
				this.form.fields.push(empty);
			},
			verifyField(){
				this.form.fields.forEach(f => {
					if(f.active)
					{
						//check if data is valid enough 
						if(f.fieldName.length && (f.dataType.length && f.dataType != '[select type]')){
							
							// then check for duplicates
							this.form.fields.filter(f => !f.active).forEach(field => {
								if(field.fieldName.toLowerCase() == f.fieldName.toLowerCase())
									this.errorCode = 1;
								else { 
									this.errorCode = 0;

								}
							});


							
						} else {
							this.errorCode = 2;
						}
					}
				});

			},
			createCollection(){

			}
		}


	}	
</script>

<style lang="scss" scoped>
	.errors{
		float: right;
		width: 100%;
		margin: 5px 0;
		background: #fcecec;
		border: 1px solid #f8e2e2;
		padding: 10px;
		color: #ba7979;
		&:last-of-type{
			margin-bottom:20px;
		}
		i{
			float: left;
			line-height: 1.5em;
			padding: 0 10px;
			&:hover{
				cursor:pointer;
			}
		}
	}

	.fade-transition{
		transition: all .5s ease;
	}
	.fade-enter{
		opacity:0;
	}
	.fade-leave{
		height:0;
		opacity:0;
	}
	table{
		width:100%; margin:10px 0;
		border-spacing: 0;
		thead{background:red;background: #e7edf3;font-size: 11px;}
		thead th { text-align:left; padding: 8px 6px; &:last-of-type{ text-align:center; } }
		tbody td { padding: 8px 6px; &:last-of-type{ text-align:center; } }
		tbody tr:nth-child(odd) { background: #f9f9f9; }
		tbody tr.active { background:#fff1c6 !important }
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