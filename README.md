# 前端学习圈打卡

## Day01——开篇

### 1.iconfont图标的批量添加

```js
var iconFontList = document.querySelectorAll('.icon-gouwuche1')
Array.from(iconFontList).forEach(v => v.click())
```

### 2.less通用样式引入、Mixins混入的妙用

common文件夹下的index.less文件

less-demo：对index.less内容的使用列举

### 3.Animate动画库的正确打开方式

https://www.jq22.com/yanshi819

common文件夹下的animate.css文件

index：对less和animate的使用

## Day02——实用CSS集锦

### 1.伪元素实现首字下沉

首字母下沉，伪元素实现

```css
.first-letter::first-letter {
    ...
}
```

### 2.文本溢出

- 一定要有宽度
- 单行文本溢出省略
- 多行文本溢出省略

### 3.文本选择样式

`::selection`

### 4.各类切角样式（可实现优惠券效果）

- 单个切角
- 多个切角
- 弧形切角

```css
/*直角*/
background: linear-gradient(..., transparent ..., ...);
/*圆角*/
background: radial-gradient(circle ..., transparent ..., ...) ... ...
```

### 5.伪类实现遮罩条

## Day03——玻璃拟态登录表单

这种把阴影、透明度以及模糊背景结合到一起的UI设计思路，因为给人以玻璃的质感，被称为Glassmorphism（玻璃拟态）

玻璃拟态属于拟物风格,是阴影、透明度以及模糊背景结合

有节制地运用这种设计风格能起到很好的效果

**正确设置透明度**

要记住一点，不管怎样，你不能让整个形状都透明，只能让它的填充透明。大多数设计工具在100%填充，对象透明度较低时，背景模糊会不起作用。

**选择合适的背景**

背景在这个效果当中扮演着重要的角色。背景不能太简单或者太单调，否则效果就看不出来。但也不能太复杂。

选择背景时，要确保色调差足够大，这样玻璃效果才真正可见。

**最后细节**

可以试着给形状添加1个像素厚的内边框，并且让它有一定的透明度。这可以模拟玻璃的边缘，让形状在背景当中脱颖而出。

## Day04——渐进&启动

### 1.学习UniApp基础文档

一共九篇文档，查漏补缺

day4项目为文档的练习

### 2.社区交友项目

老师发了搭的基础的项目框架，类似之前的Article项目，有首页列表（未封装）

## Day05——首页基础封装

- 通用列表封装，引入和使用 common-list-item.vue
- 通用分隔条组件，全局挂载 divider.vue
- 细节处理：无图片判定，关注取关按钮样式及其事件交互

## Day06——完成首页

- 顶踩操作
- 首页滚动tab导航联动
- 上拉加载组件 loadmore.vue
- 全局无数据组件 nothing.vue

## Day07——搜索页面

## Day08—发表页