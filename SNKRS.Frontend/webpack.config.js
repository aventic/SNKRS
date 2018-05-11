const path = require('path');
const webpack = require('webpack');
const CleanPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const LivereloadPlugin = require('webpack-livereload-plugin');

module.exports = (env, { mode }) => {
    const isProduction = mode === 'production';

    return {
        entry: {
            client: './src/client.tsx',
            server: './src/server.tsx'
        },
        output: {
            path: path.resolve(__dirname, '../SNKRS.Website/dist'),
            filename: 'scripts/[name].bundle.js'
        },
        resolve: {
            plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
            extensions: ['.ts', '.tsx', '.js']
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: 'ts-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.svg$/,
                    use: [
                        {
                            loader: 'raw-loader'
                        },
                        {
                            loader: 'svgo-loader'
                        }
                    ]
                },
                {
                    test: /\.s?css$/,
                    use: ExtractTextPlugin.extract({
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap: true,
                                    minimize: isProduction
                                }
                            },
                            {
                                loader: 'postcss-loader',
                                options: {
                                    sourceMap: true,
                                    plugins: [require('autoprefixer')()]
                                }
                            },
                            {
                                loader: 'sass-loader',
                                options: {
                                    sourceMap: true,
                                    minimize: isProduction
                                }
                            }
                        ]
                    })
                }
            ]
        },
        plugins: [
            new ExtractTextPlugin('styles/styles.bundle.css'),
            new LivereloadPlugin({
                delay: 10
            })
            // new CleanPlugin('../SNKRS.Website/dist')
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map'
    };
};
