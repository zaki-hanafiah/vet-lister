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
// __afill_20251210_1728__
// __afill_20260611_947__
// __afill_20260728_926__
// __afill_20251225_90__
// __afill_20260501_1139__
// __afill_20260726_1721__
// __afill_20260103_2054__
// __afill_20260310_182__
// __afill_20260724_944__
