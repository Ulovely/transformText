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
<tfText txt="猪" label="text" tclass="testClass" tstyle="color:red"></tfText><!-- text组件用这个 -->
或
<tfText txt="猪" label="view" tclass="testClass" tstyle="color:red"></tfText><!-- view组件用这个 -->
或
<tfText :txt='txt'></tfText><!-- 动态渲染，就用这种 -->
```

在 ``script`` 中reload说明
当前页面切换语言需要用到

**tfText 属性说明：**

|属性名		|类型	|默认值	                    |说明					|
|---		|----	|---	                    |---					|
|txt		|String	|''	            			|简体中文				|
|label		|String	|''	            			|组件类型				|
|tclass		|String	|''	            			|组件类名				|
|tstyle		|String	|''	            			|组件样式				|

**更新记录：**

当前页面重新渲染、添加了组件类型、组件类名、组件样式

**感谢：**

> 有更多优化建议和需求，请联系作者。谢谢！