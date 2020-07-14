const path = require('path');
//拼接路径
function resolve(dir) {
	return path.join(__dirname, dir)
}
module.exports = {
	chainWebpack: (config) => {
		module: {
			rules: [{
				test: /\.scss$/,
				use: [{
					loader: "style-loader" // 将 JS 字符串生成为 style 节点
				}, {
					loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
				}, {
					loader: "sass-loader" // 将 Sass 编译成 CSS
				}]
			}]
		}
		config.resolve.alias
		.set('@', resolve('src'))
		.set('@components', resolve('src/components'))
		.set('@assets', resolve('src/assets'))
		.set('@views', resolve('src/views'))
		.set('@request', resolve('src/request'))
		.set('@common', resolve('src/common'))
		.set('@content', resolve('src/components/content'))
		.set('@utils', resolve('src/utils'))
		.set('@img', resolve('src/assets/images'))
	}
}
