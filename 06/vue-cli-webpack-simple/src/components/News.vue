<template id="news">
	<div>
		<h3>我是新闻页</h3>
		<ul>
			<li v-for="(val, index) in news">
				{{ val }}
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
	    name: 'news',
		data(){
	        return {
	            news: ['111', '222', '333']
	        };
		}
	}
</script>

<style scoped="">
	li{
		border: 1px solid #ea1;
	}
</style>

