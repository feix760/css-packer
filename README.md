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
var cssPacker = require('css-packer')
cssPacker(cssCode)
cssPacker.packFile(filePath)
```
```
css-packer style.css > style.js
<html>
<head></head>
<body>
    <script src="style.js"></script>
</body>
</html>
```

### 注意
将style.js放在body里，而不是head里
