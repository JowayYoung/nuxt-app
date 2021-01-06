### 坑

- [x] 调整编译目录`rootDir`为`srcDir`
- [x] 使用`dark-sass`代替`node-sass`：`nuxt.config.js-build-loaders-scss`
- [x] `/assets`和`/static`的区别
	- `/assets`存放编译资源文件
	- `/static`存放静态资源文件
- [x] `nuxt.config.js`和`vue文件`里引用上述两个文件夹的文件
	- `/assets`使用`@/assets/xxx`的方式引用
	- `/static`使用`/xxx`的方式引用(服务启动后将文件映射到`/`上)
	- `nuxt.config.js-head`只能引用`/static`的文件
- [x] 样式引入变量，使用`@nuxtjs/style-resources`
- [x] `window`和`document`未定义：`process.client`
- [x] 使用`import()`导入第三方`Web库`

### 进度

- [ ] 首页：W
- [ ] 产品：Y
- [ ] 研发：Y
- [ ] 案例：Y
- [ ] 文化：Y
- [ ] 新闻：W
- [ ] 关于：W
- [x] 联系：W