<p align="center">
<img  src="https://images.gitee.com/uploads/images/2018/0914/141509_bf37f6ae_2525.jpeg" alt="个人支付PC页面" >
</p>


## 文件说明:

 - function.php : 公用功能函数,配置
 - order.php : 下单演示,订单状态查询
 - notify.php : 订单通知接受

 - index.pug 下单页面
 - pay.pug : 支付页面
 - complate.pug : 支付完成页面
 - src/rest-mapping.js: 配置文件,将接口地址改成自己的实际地址
 - config/dev.env.js  开发环境配置文件
 - config/prod.env.js 生产环境配置文件
 - config/index.js  项目构建配置文件
 - dist/ 将前端和源代码进行构建后生成的目录
 

#### 项目所用技术栈参考文档
- [Webpack](https://webpack.js.org/)
- [Gulp](https://gulpjs.com/)
- [Vue](https://vuejs.org/)
- [Axios](https://github.com/axios/axios)
- [ESLint](https://eslint.org/)
- [Pug](https://pugjs.org/api/getting-started.html)


## 开始使用

#### 本地开发配置

将根路径下的所有**php**文件和**pxpay**文件夹放置到php容器中，并修改**dev.env.js** 中的**RESUEST_HOST**字段<br />

开启跨域请求: 编辑 **order.php** 进行配置

#### 安装环境

下载并安装 **Nodejs** (https://nodejs.org/en/)

#### 安装依赖
```bash
npm install
```

#### 本地开发
```bash
npm run dev

访问：http://localhost:8080/
```

#### 生产环境资源发布
```bash
npm run build
```

#### QQ交流群

153497287

