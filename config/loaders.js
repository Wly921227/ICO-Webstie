const ExtractTextPlugin = require('extract-text-webpack-plugin')

let loader = [
    {
        test: /\.(jpg|jpeg|png|gif|webp)$/,
        loader: 'url?limit=8192&name=images/[name].[hash:8].[ext]'
    },
    {
        test: /\.(ttf)/,
        loader: 'url?name=font/[name].[hash:8].[ext]'
    },
    {
        test: /\.(json)$/,
        loader: 'json-loader'
    },
    {
        test: /\.(html|ejs)$/,
        loader: 'html?minimize=false'
    }
]

if (process.env.NODE_ENV === 'production') {
    loader = loader.concat([
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'stage-0'],
                plugins: [
                    'add-module-exports'
                ],
                cacheDirectory: true
            }
        },
        {
            test: /\.less$/,
            exclude: /node_modules/,
            loader: ExtractTextPlugin.extract(
                'style', 'css!less!autoprefixer?' +
                '{browsers: ["last 4 version", "Android 4", "iOS 7"], remove: false}')
        },
        {
            test: /\.css/,
            exclude: /node_modules/,
            loader: ExtractTextPlugin.extract('style', 'css!autoprefixer?' +
                '{browsers: ["last 4 version", "Android 4", "iOS 7"], remove: false}')
        }
    ])
} else {
    loader = loader.concat([
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'stage-0'],
                plugins: [
                    'transform-runtime',
                    'add-module-exports'
                ],
                cacheDirectory: true
            }
        },
        {
            test: /\.less$/,
            exclude: /node_modules/,
            loaders: [
                'style',
                'css',
                'less',
                'autoprefixer?{browsers: ["last 2 version", "Android 4", "iOS 7"], remove: false}'
            ]
        },
        {
            test: /\.css/,
            exclude: /node_modules/,
            loaders: [
                'style',
                'css'
            ]
        }
    ])
}

module.exports = loader