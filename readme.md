#####                          KOA开发手册
###   一、开发koa后端所需的中间件或者插件
           需要下载的中间件：
              koa
              koa-router
              koa-bodyparser           -- 用来解析请求报文的主题部分，ctx.request.body获取主体部分
              koa-views、ejs           -- 生成模板引擎并使用

##   【注:】暂时就需要这些，等到开发的时候需要哪个中间件再往里补就行

###  二、搭建流程
          请看app.js文件，那里有详细的说明。至于搭建顺序，如果是小白的话，简易从上往下看。当然如果你有经验的话
          搭建流程不用看的。

##   【注意事项:】1、启动路由要放在后面写。
##                2、router.routes()和router.allowedMethods()必须要写。          
              
###  三、关于ejs的使用
          3.1、为什么使用ejs模板引擎？
                 我们这个项目之所以要使用ejs是因为在项目开始阶段，我想到了用图形验证码来做注册功能，如果一开始就用react
                 做前端页面，感觉太耗时，而且中间肯定会有很多坑。所以为了先做出一个图形验证码的雏形，我还是先用ejs模板引擎吧。
          3.2、模板引擎的种类
                 这个还是很多的，我知道的有pug、ejs、swig、jade、Handlebars.js
          3.3、ejs使用规则
                 这个去看index.ejs吧，那里面的如果都会了，ejs前端这一块渲染个静态页面没啥问题。 

###  四、koa-bodyparser原理解析
       【参考:】https://blog.csdn.net/dai_qingyun/article/details/86500998

###  四、图形验证码(svg-captcha)
           这个功能明天再说(验证码登录)           

