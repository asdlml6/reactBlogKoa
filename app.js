const Koa=require('koa')
//引入koa-router
const Router=require('koa-router')
const bodyParser=require('koa-bodyparser')
const views=require('koa-views')
const path=require('path')
const app=new Koa()
//创建路由，支持参数传递,Router实例化得到router
const router=new Router()


//配置中间件
app.use(bodyParser())

//配置静态文件的后缀为ejs
app.use(views('./views',{
    extension:'ejs'
}))

//为每个路由配置公共数据
app.use(async (ctx,next)=>{
  ctx.state.username='张三'
  //继续向下匹配路由
  await next()
})

router.get('/',async (ctx)=>{
  const title='你好ejs'
  const content='<h2>这是一个h2</h2>'
  const age=20
  const list=['嘻嘻','哈哈','看看']
  await ctx.render('index',{
      title,content,age,list
  })
})

app.use(router.routes())          // 启动路由，用来组装匹配好的路由，并返回一个合并好的中间件
// 调用router.allowedMethods()获得一个中间件，当发送了不符合的请求时，
// 会返回 `405 Method Not Allowed` 或 `501 Not Implemented`
app.use(router.allowedMethods())  

app.listen(3005,function(){
    console.log('3005 is running')
})

//有关koa简单后台的建立
//https://blog.csdn.net/swl979623074/article/details/81272066
//https://www.jianshu.com/p/47259f48c153
//https://www.jb51.net/article/132352.htm
//https://blog.csdn.net/qsmy520/article/details/105392813