// .babelrc.js
module.exports = {
    presets: [['next/babel']],
    plugins: [
        [
            'import',
            { libraryName: 'antd', libraryDirectory: 'lib', style: true },
        ],
        ['module-resolver', { alias: { '@': './src' } }],
        ['inline-react-svg'],
        ['add-react-displayname'],
    ],
}
