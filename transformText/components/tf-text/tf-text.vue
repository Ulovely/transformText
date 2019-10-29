<template>
	<text v-if="label&&label=='text'" :class="tclass" :style="tstyle">{{returnTxt}}</text>
	<view v-else-if="label&&label=='view'" :class="tclass" :style="tstyle">{{returnTxt}}</view>
	<block v-else>{{returnTxt}}</block>
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
			label:{
			  type: String,
			  default: ""
			},
			tclass:{
			  type: String,
			  default: " "
			},
			tstyle:{
			  type: String,
			  default: " "
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
