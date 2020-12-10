## M-UI
## ng-mui
angular2+UI组件库，自己练习造轮子~-~，欢迎大家加入，有问题请私信我
ng-package.json配置文件，angular library构建时依赖的配置文件

## 关键配置说明：
ng-package.json:
dest,lib构建输出路径，这里我们修改为publish目录，和项目构建dist目录区分开
lib/entryFile，指定库构建入口文件，此处指向我们上文的index.ts
whitelistedNonPeerDependencies:避免第三方依赖库可能存在多版本冲突的风险,如果不配置白名单，存在dependencies配置时就会构建失败。