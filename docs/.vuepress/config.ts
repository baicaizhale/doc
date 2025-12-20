import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
    base: '/',
    lang: 'zh-CN',
    title: '辞舟咽雪的文档库',
    description: '一个简约的文档库',

    head: [
        // 配置站点图标
        ['link', { rel: 'icon', type: 'image/png', href: 'https://i.miji.bid/2025/04/19/fe60abc468232a0b42d27bf5ec85831c.png' }],
    ],

    bundler: viteBundler(),
    shouldPrefetch: false, // 站点较大，页面数量较多时，不建议启用

    theme: plumeTheme({
        /* 添加您的部署域名, 有助于 SEO, 生成 sitemap */
        // hostname: 'https://your_site_url',

        autoFrontmatter: {
            permalink: false, // 禁用自动生成永久链接
        },

        /* 文档仓库配置，用于 editLink */
        // docsRepo: '',
        // docsDir: 'docs',
        // docsBranch: '',

        /* 页内信息 */
        // editLink: true,
        // lastUpdated: true,
        // contributors: true,
        // changelog: false,

        /**
         * 博客
         * @see https://theme-plume.vuejs.press/config/basic/#blog
         */


        /**
         * 编译缓存，加快编译速度
         * @see https://theme-plume.vuejs.press/config/basic/#cache
         */
        cache: 'filesystem',

        /* 本地搜索, 默认启用 */
        search: { provider: 'local' },

        /**
         * 评论 comments
         * @see https://theme-plume.vuejs.press/config/plugins/comments/
         */
        comment: {
            provider: 'Giscus', // "Artalk“ | "Giscus" | "Twikoo" | "Waline"
            comment: true,
            repo: 'baicaizhale/giscus',
            repoId: 'R_kgDOOcAMCg',
            category: 'Announcements',
            categoryId: 'DIC_kwDOOcAMCs4CpPhZ',
        },

        /**
         * 资源链接替换
         * @see https://theme-plume.vuejs.press/guide/features/replace-assets/
         */
        // replaceAssets: 'https://cdn.example.com',

        /**
         * 加密功能
         * @see https://theme-plume.vuejs.press/guide/features/encryption/
         */
        // encrypt: {},

        // 使用标准的 VuePress sidebar 配置方式
        sidebar: {

            '/notes/CDKer/': [
                {
                    text: 'CDKer 介绍',
                    link: '/notes/CDKer/'
                },
                {
                    text: '核心功能',
                    collapsed: false,
                    items: [
                        { text: 'CDKer', link: '/notes/CDKer/CDKer.md' },
                        { text: '插件', link: '/notes/CDKer/plugin.md' },
                        { text: 'CDK', link: '/notes/CDKer/cdk.md' }
                    ]
                },
                {
                    text: '命令相关',
                    collapsed: false,
                    items: [
                        { text: '添加命令执行器', link: '/notes/CDKer/AddCommandExecutor.md' },
                        { text: 'CDK Tab 补全器', link: '/notes/CDKer/CDKTabCompleter.md' },
                        { text: '命令工具', link: '/notes/CDKer/CommandUtils.md' }
                    ]
                },
                {
                    text: '配置与语言',
                    collapsed: false,
                    items: [
                        { text: '配置', link: '/notes/CDKer/config.md' },
                        { text: '中文语言包', link: '/notes/CDKer/lang_cn.md' },
                        { text: '英文语言包', link: '/notes/CDKer/lang_en.md' }
                    ]
                }
            ],
            '/notes/LiteMotto/': [
                {
                    text: 'LiteMotto 介绍',
                    link: '/notes/LiteMotto/README.md'
                },
                {
                    text: '快速开始',
                    collapsed: false,
                    items: [
                        { text: '安装指南', link: '/notes/LiteMotto/getting-started/installation.md' },
                        { text: '快速上手', link: '/notes/LiteMotto/getting-started/quick-start.md' }
                    ]
                },
                {
                    text: '配置指南',
                    collapsed: false,
                    items: [
                        { text: '基础配置', link: '/notes/LiteMotto/configuration/basic.md' },
                        { text: '进阶配置', link: '/notes/LiteMotto/configuration/advanced.md' },
                        { text: '提供商配置', link: '/notes/LiteMotto/configuration/providers.md' }
                    ]
                },
                {
                    text: '核心特性',
                    collapsed: false,
                    items: [
                        { text: '格言生成', link: '/notes/LiteMotto/features/motto-generation.md' },
                        { text: '调试系统', link: '/notes/LiteMotto/features/debug-system.md' },
                        { text: '指标统计', link: '/notes/LiteMotto/features/metrics.md' }
                    ]
                },
                {
                    text: '参考手册',
                    collapsed: false,
                    items: [
                        { text: '命令', link: '/notes/LiteMotto/reference/commands.md' },
                        { text: '权限', link: '/notes/LiteMotto/reference/permissions.md' },
                        { text: 'API', link: '/notes/LiteMotto/reference/api.md' }
                    ]
                },
                {
                    text: '常见问题',
                    collapsed: false,
                    items: [
                        { text: '故障排除', link: '/notes/LiteMotto/faq/troubleshooting.md' }
                    ]
                }
            ]
            // 其他页面的侧边栏可以继续添加
        }
    })
})
