/** @type {import('next').NextConfig} */
// next.config.js
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPlugins = require('next-compose-plugins')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withAntdLess = require('next-plugin-antd-less')

const pluginAntdLess = withAntdLess({})

module.exports = withPlugins([[pluginAntdLess]], {
    reactStrictMode: true,
    webpack(config) {
        return config
    },
})
