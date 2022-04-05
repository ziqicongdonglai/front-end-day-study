# 前端学习圈打卡

## Day01-开篇

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

## Day02-实用CSS集锦

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

