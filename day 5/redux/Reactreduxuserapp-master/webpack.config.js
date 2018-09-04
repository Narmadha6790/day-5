 module.exports = {
     entry: './src/app.js',
     output: {
         path: './dist',
         filename: 'app.bundle.js',
     },
     devServer:
     {
         inline:true,
         port:9090
     },
     module: {
         loaders: [{
             test: /\.jsx?$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
             query: {
                presets: ['es2015','react','stage-0'],
                plugins: ['react-html-attrs', 'transform-class-properties','transform-decorators-legacy']
             }
         }]
     }
 }
