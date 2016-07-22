const path = require('path'); 

const PATHS = {
    app: path.join(__dirname,  'app'),
    build: path.join(__dirname, 'build')
};

module.exports={
    entry: {
        app: path.join(PATHS.app,'index.jsx')
    },
    resolve:{
        extension:['','.js','.jsx']
    },
    devServer: {
            contentBase: 'build'
    },
    module: {
        loaders: [
            {
                // Test expects a RegExp! Note the slashes!
                test: /\.css$/,
                loaders: ['style', 'css'],                
                include: PATHS.app
            },
            {
                test: /\.jsx?$/,                
                loaders: ['babel?cacheDirectory'],               
                include: PATHS.app
            }
        ]
    },

    output: {
        path: PATHS.build,
        filename: 'bundle.js'
    }
};