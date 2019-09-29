<template>
	<block>{{returnTxt}}</block>
</template>

<script>
	import transformText from "./transformText.js";
	export default {
		name: 'tfText',
		props: {
			txt: {
			  type: String,
			  default: ' '
			},
			languageChange:{
			  type: String,
			  default: uni.getStorageSync("LANGUAGE")
			}
		},
		data() {
			return {
				returnTxt:this.txt
			};
		},
		created() {
			this.returnTxt=transformText.turn(this.txt,this.Common.Config.header.LANGUAGE)
		},
		watch:{
			txt(txt) {
				this.returnTxt=transformText.turn(this.txt,this.Common.Config.header.LANGUAGE);
			},
			languageChange(type){
				uni.setStorageSync("LANGUAGE",type)
				this.Common.Config.header.LANGUAGE = type;
				this.returnTxt=transformText.turn(this.txt,this.Common.Config.header.LANGUAGE);
			}
		}
	}
</script>

<style>
</style>
