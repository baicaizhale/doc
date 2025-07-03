---
title: plugins.yml
createTime: 2025/07/03 12:54:37
permalink: /notes/CDKer/开发指南/plugins.yml/
---
### `plugin.yml`

`plugin.yml` 是 Bukkit 插件的**核心元数据文件**，它位于插件 JAR 文件的根目录（在开发时通常位于 `src/main/resources/` 目录下）。这个文件是 Minecraft 服务器识别、加载和管理 CDKer 插件的必要条件。它向服务器提供了插件的基本信息、注册的命令以及相关的权限节点。

**文件结构示例**:

```yaml
name: CDKer
version: '3.0.0'
main: org.baicaizhale.cDKer.CDKer
api-version: '1.18'

commands:
  cdk:
    description: 管理和使用礼品码的命令
    usage: /cdk <help|create|add|delete|list|reload|export|use>
    aliases: [cdkadmin, giftcode]
    tab-completer: org.baicaizhale.cDKer.CDKTabCompleter

permissions:
  cdk.help:
    description: 允许查看CDK帮助信息
    default: true
  cdk.create:
    description: 允许创建新的CDK
    default: op
  cdk.add:
    description: 允许增加CDK数量或创建新CDK
    default: op
  cdk.delete:
    description: 允许删除CDK
    default: op
  cdk.list:
    description: 允许查看CDK列表
    default: op
  cdk.reload:
    description: 允许重载插件配置
    default: op
  cdk.export:
    description: 允许导出CDK数据
    default: op
  cdk.use:
    description: 允许玩家使用CDK
    default: true
```

**配置项说明**:

* **`name`**:

    * **类型**: 字符串 (String)
    * **描述**: 插件的显示名称。这是服务器在 `/plugins` 命令输出中识别您的插件的名称。
    * **示例**: `CDKer`

* **`version`**:

    * **类型**: 字符串 (String)
    * **描述**: 插件的当前版本号。建议在每次发布新版本或进行重大更改时更新此字段。
    * **示例**: `'3.0.0'`

* **`main`**:

    * **类型**: 字符串 (String)
    * **描述**: 插件主类的完整路径。当服务器加载插件时，它会查找并实例化此路径指向的类（即继承 `JavaPlugin` 的类）来启动插件。
    * **示例**: `org.baicaizhale.cDKer.CDKer`

* **`api-version`**:

    * **类型**: 字符串 (String)
    * **描述**: 插件兼容的最低 Minecraft 服务器 API 版本。此字段有助于 Bukkit 确保插件与服务器的兼容性，防止在不兼容的环境中加载插件。
    * **示例**: `'1.18'` (表示插件兼容 Minecraft 1.18 及以上版本的 API)

* **`commands`**:

    * **描述**: 此部分定义了插件在服务器中注册的所有命令。每个命令都作为 `commands` 下的一个子键。
    * **`cdk`**:
        * **`description`**: 命令的简短描述，通常在游戏内帮助信息中显示。
        * **`usage`**: 命令的正确使用格式，当玩家输入错误命令或请求帮助时显示。它列出了所有支持的子命令。
        * **`aliases`**: (可选) 命令的别名列表。玩家可以使用这些别名来执行相同的命令。
        * **`tab-completer`**: 指定处理该命令 Tab 自动补全逻辑的类。此处的类必须实现 `TabCompleter` 接口。

* **`permissions`**:

    * **描述**: 此部分声明了插件使用的所有权限节点。这些定义使得权限管理插件（如 LuckPerms、PermissionsEx 等）能够识别并允许服务器管理员对这些权限进行管理和分配。
    * **`<permission_node>`**: 每个权限节点都作为一个子键。
        * **`description`**: 权限节点的详细描述，解释该权限所允许的操作。
        * **`default`**: 定义该权限的默认状态。
            * `true`: 所有玩家（包括非 OP 玩家）默认拥有此权限。
            * `op`: 只有服务器操作员（OP）默认拥有此权限。
            * `false`: 默认情况下，任何玩家都不拥有此权限，需要通过权限插件手动授予。

**重要性**:

`plugin.yml` 是插件的“身份证”。它不仅告诉服务器如何加载插件，还定义了插件与服务器环境和玩家交互的规则。任何对命令名称、权限节点或主类路径的更改，都必须在此文件中进行相应更新，否则插件可能无法正常工作。