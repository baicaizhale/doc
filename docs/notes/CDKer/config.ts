// .vuepress/config.js 或 .vuepress/config.ts
module.exports = {
    themeConfig: {
        sidebar: [
            {
                text: '引言与概述',
                link: '/introduction-overview.md' // 对应文件: CDKer/引言与概述.md
            },
            {
                text: '主要特性',
                link: '/features.md' // 对应文件: CDKer/主要特性.md
            },
            {
                text: '安装指南',
                link: '/installation-guide.md' // 对应文件: CDKer/安装指南.md
            },
            {
                text: '配置文件详解',
                link: '/config-file-details.md' // 对应文件: CDKer/配置文件详解.md
            },
            {
                text: '配置文件', // 对应文件夹: CDKer/配置文件/
                collapsible: true,
                children: [
                    '/config-files/cdk-yml.md', // 对应文件: CDKer/配置文件/cdk.yml.md
                    '/config-files/used-codes-yml.md', // 对应文件: CDKer/配置文件/used_codes.yml.md
                    '/config-files/language-config.md' // 对应文件: CDKer/配置文件/语言配置.md
                ]
            },
            {
                text: '命令与权限', // 对应文件夹: CDKer/命令与权限/
                collapsible: true,
                children: [
                    '/commands-permissions/command-usage-notes.md', // 对应文件: CDKer/命令与权限/命令使用说明.md
                    '/commands-permissions/permission-nodes.md', // 对应文件: CDKer/命令与权限/权限节点.md
                    '/commands-permissions/player-commands.md', // 对应文件: CDKer/命令与权限/玩家命令.md
                    '/commands-permissions/admin-commands.md' // 对应文件: CDKer/命令与权限/管理员命令.md
                ]
            },
            {
                text: '开发指南', // 对应文件夹: CDKer/开发指南/
                collapsible: true,
                children: [
                    '/development-guide/plugins-yml.md', // 对应文件: CDKer/开发指南/plugins.yml.md
                    '/development-guide/development-contribution.md', // 对应文件: CDKer/开发指南/开发与贡献.md
                    '/development-guide/license.md' // 对应文件: CDKer/开发指南/许可证.md
                ]
            }
        ]
    }
};
