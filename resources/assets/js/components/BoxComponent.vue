<template>
	<div :class="classes">
		<div class="col shadow">
			<slot></slot>
		</div>
	</div>
</template>


<script>
	export default { 
		props: ['classes'],
		data(){
			return{
				classes: ''
			}
		}

	}
</script>


<style>
	
</style>

