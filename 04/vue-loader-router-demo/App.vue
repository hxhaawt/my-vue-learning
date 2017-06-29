<template>
	<div id="app">
		<h3>vue-loader+ vue-router</h3>
		<div>
			<a v-link="{path:'/home'}">主页</a>
			<a v-link="{path:'/news'}">新闻</a>
		</div>
		<router-view></router-view>
	</div>
	
</template>

<style>

	li{
		list-style-type: none;
	}
	.v-link-active{
		font-size: 30px;
		color: blueviolet;
	}
</style>

<script>

</script>


