# Canvas简介
> \<canvas>元素是HTML5新增的，它负责在页面中设定一个区域，然后通过JavaScript动态地在这个区域中绘制图形。
> 支持基本绘图能力2D上下文，webGL 的3D上下文
## 一、基本用法
- 使用canvas，必须先设置其width和height属性，指定可绘图的区域大小。在开始和结束标签中的内容是后备内容，当浏览器不支持canvas时会显示
- 在使用getContext创建绘图上下文前先检测getContext方法是否存在
- 使用 toDataURL()方法，可以导出canvas上绘制的图象。参数：图像的MIME类型格式
```
var imgURI = drawing.toDataURL('image/png');
//显示图像
var image = document.createElement('img');
image.src=imgURI;
document.body.appendChild(image);
```
### 1.1 2D上下文
> 大多2d绘图操作都是围绕描边stroke,填充fill来完成的。其涉及的属性及：strokeStyle,fillStyle
#### 1.1.1 矩形Api
- fillRect() :填充矩形
- strokeRect() :描边矩形
- clearRect() :清除矩形
- lineWidth :描边线条宽度
- lineCap: 线头开关（平台butt,圆头round,方头square)
- lineJoin: 线条相交的方式（圆交round,斜交bevel,斜接miter）
- 上述方法的参数： x,y,width,height 
#### 1.1.2 路径Api
- beginPath() :开始绘制新路径
- arc(x,y,radius,startAngle,endAngle,counterclockwise) :以x，y为圆心绘制一条弧线，半径为radius,counterclockwise:是否逆时针 angle角度
- arcTo(x1,y1,x2,y2,radius) :从上一点绘制一条弧线到下一点，并以给定的半径radius,穿过x1,y1
- bezierCurveTo(c1x,c1y,c2x,c2y,x,y) :曲线
- lineTo(x,y): 直线
- moveTo(x,y) :移动绘图起始位置到x，y，不画线
- rect(x,y,width,height) :矩形
> 以上方法只是创建了路径，若要上色或描边需进一步操作
- closePath() :绘制一条连接到路径起点的线条
- fill() :使用fillStyle填充路径
- stroke() :使用strokeStyle搭边路径
- clip() :在路径上创建一个剪贴区域
```
 var box = document.getElementById('box')
  var cx = box.getContext('2d')
  //外圆
  cx.beginPath()
  cx.arc(300,300,100,0,2*Math.PI,false)
  cx.stroke();
  cx.closePath();
//  内圆
  cx.beginPath()
  cx.arc(300,300,90,0,2*Math.PI,false)
  cx.strokeStyle='red'
  cx.stroke()
  cx.closePath();
  //指针
  cx.beginPath()
  //分针
  cx.moveTo(300,300)
  cx.lineTo(300,240)
  //时针
  cx.moveTo(300,300)
  cx.lineTo(260,300)
  cx.stroke()
  cx.closePath()
```
#### 1.1.3 绘制文本
- fillText() :填充文本
- strokeText() :描边文本
- font: 绘制的文本字体属性（值与CSS的font属性等同）
- textAlign: 对齐方式，start,end,left,right,center(建议使用start,end)
- textBaseline: 文本基线，top,hanging,middle,alphabetic,ideographic,bottom
- 参数：（fonttext:文本内容，x,y,font-size)
```
cx.font='bold 14px Arial';
cx.textAlign='center';
cx.textBaseline='middle'; 
cx.fillText('hello canvas',100,20) ; //绘制
```
#### 1.1.4 变换
> 通过上下文的变换，可以把处理后的图像绘制到画布上。
- rotate(angle) :围绕原点旋转
- scale(scaleX,scaleY) :缩放
- translate(x,y) :移动到x,y
- transform(m1_1, m1_2, m2_1, m2_2, dx, dy):直接修改变换矩阵
#### 1.1.5 绘制图像
> 将一幅图绘制到画面上，可以使用drawImage();
- drawImage(img,x,y,width,height); //传入图像，x,y坐标
- toDataURL() :获取操作canvas的绘制结果，若图像来自其他域，它会报错
#### 1.1.6 阴影、渐变
- shadowColor: 同CSS颜色格式
- shadowOffsetX: 水平方向统称量，默认0
- shadowOffsetY: 垂直方向偏移量
- shadowBlur: 模糊像素数
> 渐变由CanvasGradient实例表示。
- createLinearGradient(x,y,x1,y1) :创建渐变实例,参数：起始到终止点的坐标
- createRadialGradient(x1,y1,r1,x2,y2,r2) :创建径相渐变
- gradient.addColorStop(0,'white') :指定色标，参数清楚是否位置，CSS颜色值
```
  var draw = document.getElementById('box')
  var cx = draw.getContext('2d');
  var gradient = cx.createLinearGradient(0,0,200,200) //创建渐变
  gradient.addColorStop(0,'#f00') //渐变开始颜色
  gradient.addColorStop(1,'#ff0') //渐变终止颜色
  cx.fillStyle=gradient
  cx.fillRect(0,0,200,200)
```
