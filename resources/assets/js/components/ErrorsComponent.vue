<template>
	<div class="errors" v-show="visible">
		<ul>
			<li v-for="error in uniqueErrors">{{error}}<i @click="errors.splice(error, 1)" class="fa fa-times"></i></li>
		</ul>
	</div>
</template>
<script>
	import unique from 'lodash/uniq';
	export default{
		props: ['errors'],
		computed: {
			visible(){
				return (this.uniqueErrors.length);
			},
			uniqueErrors(){
				return unique(this.errors.map(e => e));
			}
		},
	}
</script>
<style lang="scss" scoped>
	.errors{
		float: right;
		width: 100%;
		margin: 10px 0;
		background: #fcecec;
		border: 1px solid #f8e2e2;
		padding: 10px;
		color: #ba7979;
		ul { 
			margin:0;
			padding:0;
			li{
				list-style-type:none;
				float:left;
				i{
					float: left;
					line-height: 1.5em;
					padding: 0 10px;
					&:hover{
						cursor:pointer;
					}
				}
			}
		}
	}
</style>