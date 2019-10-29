<template>
	<view>
		<view class="fontShowBox" v-if="!reload">
			<tfText txt="猪"></tfText>
			<tfText txt="猪" label="text" tclass="testClass" tstyle="color:red"></tfText><!-- text组件用这个 -->
			<tfText txt="猪" label="view" tclass="testClass" tstyle="color:red"></tfText><!-- view组件用这个 -->
			<tfText :txt="txt"></tfText><!-- 动态渲染用这种 -->
		</view>
		<picker :range="language" @change="languageChange" :value="languageIndex" range-key="txt">
			<view>picker:{{language[languageIndex].txt}}</view>
		</picker>
		<view @tap="changeTxt">button:猪变龙</view>
	</view>
</template>

<script>
	import tfText from "@/components/tf-text/tf-text.vue"
	export default {
		data() {
			return {
				reload:false,//当前页面切换需要reload，其它不需要
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
			tfText
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
				var that = this;
				this.reload = !this.reload
				this.languageIndex = e.detail.value
				this.type = this.language[this.languageIndex].type
				uni.setStorageSync("LANGUAGE",this.type)
				this.Common.Config.header.LANGUAGE = this.type
				setTimeout(function(){that.reload = !that.reload})
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
