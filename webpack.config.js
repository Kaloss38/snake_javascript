const path = require("path");
const babel = require("@babel/polyfill");

module.exports = {
    mode: 'development',
    entry: "./src/script.js",
    output:{
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    devServer:{
        contentBase: path.resolve(__dirname, "dist"),
        open: true
    },
    module: {
        rules:[
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options:{
                        presets:["env"]
                    }
                }
            }
        ]
    }
}