/** @type {import('next').NextConfig} */
// next.config.js

const withPlugins = require('next-compose-plugins')

const withAntdLess = require('next-plugin-antd-less')

const pluginAntdLess = withAntdLess({})

module.exports = withPlugins([[pluginAntdLess]], {
    reactStrictMode: true,
    webpack(config) {
        return config
    },
})
// __activity_fill_marker__ 2025-12-02 5
