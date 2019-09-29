### tfText 多语言切换组件

多语言切换组件，组件名：``tfText``，代码块： tf-text。

**使用方式：**

在 ``script`` 中引用组件 

```javascript
单页面引用(不推荐，因为语言改变一般为全局引用)
import tfText from '@/components/tf-text/tf-text.vue';
export default {
    components: {tfText}
}
main.js——这里可以简写，个人项目需要传头文件
Vue.prototype.Common = {
	Config: {
		header: {
			"LANGUAGE":uni.getStorageSync("LANGUAGE")||"zh-cn"//zh-tw en
		}
	}
}

全局引用
main.js——这里可以简写，个人项目需要传头文件
import tfText from "./components/tf-text/tf-text.vue";
Vue.component("tfText",tfText);
Vue.prototype.Common = {
	Config: {
		header: {
			"LANGUAGE":uni.getStorageSync("LANGUAGE")||"zh-cn"//zh-tw en
		}
	}
}
```

在 ``template`` 中使用组件

```html
<tfText txt='猪'></tfText><!-- 直接渲染，就用这个 -->
或
<tfText :txt='txt'></tfText><!-- 动态渲染，就用这个 -->
或
<tfText :txt='txt' :languageChange="type"></tfText> <!-- 如果需要当页切换语言，就用这个 -->
```

**tfText 属性说明：**

|属性名		|类型	|默认值	                    |说明					|
|---		|----	|---	                    |---					|
|txt	|String	|''	            	|简体中文	|
|languageChange		|String	|'zh-cn'			|动态改变文本语言类型|


**languageChange 值说明：**

|值 		|类型	|说明					|
|---		|----	|---					|
|'zh-cn'	|String	|简体中文				|
|'zh-tw'	|String	|繁体中文				|
|'en'		|String	|英文，需到components/language.json里设置|
|自定义语言类型	|String	|自定义语言类型，需到components/language.json里设置|

**更新记录：**

新增多语言切换插件

**感谢：**

> 有更多优化建议和需求，请联系作者。谢谢！