---
title: plugin
createTime: 2025/10/04 23:27:59
permalink: /notes/CDKer/plugin/
---
# plugin.yml 配置文档

`plugin.yml` 文件是 Bukkit/Spigot 插件的核心配置文件，它定义了插件的基本信息、命令和权限。

## 插件信息

*   **name**: `CDKer`
    *   插件的名称。
*   **version**: `4.1.0`
    *   插件的版本号。
*   **main**: `org.baicaizhale.cDKer.CDKer`
    *   插件主类的路径，这是插件的入口点。
*   **api-version**: `1.18`
    *   插件兼容的 Bukkit/Spigot API 版本。

## 命令 (commands)

### cdk

*   **description**: `管理和使用礼品码的命令`
    *   命令的简短描述。
*   **usage**: `/cdk <help|create|add|delete|list|reload|export|use>`
    *   命令的用法示例，列出了所有可用的子命令。
*   **aliases**: `[cdkadmin, giftcode]`
    *   命令的别名，可以通过这些别名来执行 `cdk` 命令。
*   **tab-completer**: `org.baicaizhale.cDKer.CDKTabCompleter`
    *   指定了该命令的 Tab 补全器类，用于提供命令参数的自动补全功能。

## 权限 (permissions)

以下是插件定义的权限节点及其描述和默认值：

*   **cdk.help**
    *   **description**: `允许查看CDK帮助信息`
    *   **default**: `true` (默认所有玩家都拥有此权限)
*   **cdk.create**
    *   **description**: `允许创建新的CDK`
    *   **default**: `op` (默认只有OP玩家拥有此权限)
*   **cdk.add**
    *   **description**: `允许增加CDK数量或创建新CDK`
    *   **default**: `op` (默认只有OP玩家拥有此权限)
*   **cdk.delete**
    *   **description**: `允许删除CDK`
    *   **default**: `op` (默认只有OP玩家拥有此权限)
*   **cdk.list**
    *   **description**: `允许查看CDK列表`
    *   **default**: `op` (默认只有OP玩家拥有此权限)
*   **cdk.reload**
    *   **description**: `允许重载插件配置`
    *   **default**: `op` (默认只有OP玩家拥有此权限)
*   **cdk.export**
    *   **description**: `允许导出CDK数据`
    *   **default**: `op` (默认只有OP玩家拥有此权限)
*   **cdk.use**
    *   **description**: `允许玩家使用CDK`
    *   **default**: `true` (默认所有玩家都拥有此权限)