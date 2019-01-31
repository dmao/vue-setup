// vue.config.js
const path = require('path');
const rnStyles = require('@betit/ramson-styles');

module.exports = {

  configureWebpack: {
    resolve: {
      alias: {
				Common: path.resolve(__dirname, 'src/components/common'),
				Layout: path.resolve(__dirname, 'src/components/layout'),
				Img: path.resolve(__dirname, 'src/assets/img')
      }
    }
  },
  
  css: {
    loaderOptions: {
			// pass options to stylus-loader
			stylus: {
				preferPathResolver: 'webpack',
				paths: [
					path.resolve(__dirname, './src/assets/img'),
					path.resolve(__dirname, './src/assets/css'),
					path.resolve(__dirname, './src')
        ],
        import: path.resolve(__dirname, './src/assets/css/kaboo-core.styl'),
        use: [
          rnStyles({
            url: rnStyles.relativeUrl
          })
        ]
      }
    }
	},

	pwa: {
    name: 'My great App',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

  },

  // chainWebpack: config => {
  //   // GraphQL Loader
  //   config.module
  //     .rule('ramson-styles')
  //     .test(/\.pug$/)
  //     .use('graphql-tag/loader')
  //       .loader('graphql-tag/loader')
  //       .end()
  // }
	
	// chainWebpack: config => {

  //   config.module
  //     .rule('addPath')
  //     .test(/\.(png|jpg|gif)$/)
  //     .use('file-loader')
	// 			.loader('file-loader')
	// 			.options({
	// 				// regExp: /\/([a-z0-9]+)\/[a-z0-9]+\.png$/,
	// 				// name: '[1]-[name].[ext]',
  //       })
	// 		.end()
	
	// },
	





	// configureWebpack: {
	// 	module: {
	// 		rules: [
	// 			{
	// 				test: /\.(png|jpg|gif)$/,
	// 				use: [
	// 					{
	// 						loader: 'file-loader',
	// 						options: {
	// 							name: 'img/[img][name].[ext]',
	// 						},
	// 					},
	// 				],
	// 			},
	// 		],
	// 	},
  // }

}

// module.exports = {
//   chainWebpack: config => {
//     const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
//     types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type)))
//   },
// }

// function addStyleResource (rule) {
//   rule.use('style-resource')
//     .loader('style-resources-loader')
//     .options({
//       patterns: [
//         path.resolve(__dirname, './src/assets/css/kaboo-core.styl'),
//       ],
//     })
// }