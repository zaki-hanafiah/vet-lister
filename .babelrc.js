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
// __afill_20260228_811__
// __afill_20260121_816__
// __afill_20260303_2030__
