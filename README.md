# react-webpack
react with build produce and config

webpack demo
========================

执行demo
------------------------
  1.下载后解压,安装node环境,使用终端／命令 切换到该目录下 如cd c:/desktop/react-webpack
  2.执行 npm install 安装package.json中需要的文件
  3.执行 npm run dev 或 npm run build
  (dev对应webpack.config.js-开发环境,实时监控代码并编译,生成的文件是存储在内存中的,执行该命令完毕后在<br />
   浏览器中输入localhost:8080, 那么就可以看到页面了)<br />
  (build对应webpack.produce.config.js－生产环境,其实与开发环境差不多,只是根据配置信息生成文件以及压缩)<br />
  4.注意: 目前只支持ie9及以上版本,不过最好使用ie10及以上版本进行测试,ie9以下问题挺多需要处理,这里只是学习用

### 基本配置说明:
  [我的博客 webpack+react基本配置](http://blog.csdn.net/u013224660/article/details/52468714)<br />
  配置信息也可以在 webpack.config.js 与 webpack.produce.config.js 中查看注释
