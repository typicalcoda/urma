<template>
<div v-show="error.length">
		<transition name="fade">
			<div class="errors">
				<span><slot></slot><i @click="" class="fa fa-info-circle"></i></span>
			</div>
		</transition>
	</div>
</template>
<script>
	export default{
		props: ['error'],
		
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

</style>