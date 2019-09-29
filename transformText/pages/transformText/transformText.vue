<template>
	<view>
		<view class="fontShowBox">
			<!-- <tfText :txt='txt'></tfText> -->
			<tfText :txt='txt' :languageChange="type"></tfText> <!-- 如果需要当页切换语言，就用这个 -->
		</view>
		<picker :range="language" @change="languageChange" :value="languageIndex" range-key="txt">
			<view>picker:{{language[languageIndex].txt}}</view>
		</picker>
		<view @tap="changeTxt">button:猪变龙</view>
	</view>
</template>

<script>
	import transformText from "@/components/transformText/transformText.vue"
	export default {
		data() {
			return {
				language:[
					{
						type:"zh-cn",
						txt:"切换至简体中文"
					},
					{
						type:"zh-tw",
						txt:"切換至繁體中文"
					},
					{
						type:"en",
						txt:"Switch to English"
					}
				],
				languageIndex:0,
				txt:"猪",
				type:this.Common.Config.header.LANGUAGE
			}
		},
		components:{
			tfText:transformText
		},
		onLoad() {
			var type = uni.getStorageSync("LANGUAGE")
			if(type){
				this.type=type
				for(var i in this.language){
					if(this.language[i].type==type){
						this.languageIndex=i;
					}
				}
			}
		},
		methods: {
			languageChange(e){
				this.languageIndex = e.detail.value
				this.type = this.language[this.languageIndex].type
			},
			changeTxt(){
				this.txt = "龙"
			}
		}
	}
</script>

<style>
	.fontShowBox{background: #999;text-align: center;line-height: 160rpx;margin: 20rpx 0;}
	picker{margin-bottom: 20rpx;}
</style>
