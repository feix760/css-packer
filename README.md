css-packer
=====

> css-packer是一个css字典压缩工具

- 将css字典压缩成js文件

- js文件在客服端展开css

- 可将css压缩至 1/3左右的大小


### 安装
```
$ [sudo] npm install css-packer -g
```

### 使用
```
css-packer file
```

```
var cssPacker = require('css-packer')
cssPacker(cssCode)
cssPacker.packFile(filePath)
```