<template>
	<h1>welcome to vue webpack</h1>
	<h2 @click="change">{{ msg }}</h2>
	<my-menu></my-menu>
</template>

<style>
	body{
		background-color: gray;
	}
</style>

<script>
	
	import Menu from './components/menu.vue'
	export default{
	    data(){
	        return {
	            msg: "welcome to xx.vue"
	        };
	    },
		methods:{
	        change(){
	            this.msg = "vue-loader decode this file"
	        }
		},
		components: {
	        'my-menu': Menu
		}
	}
</script>


