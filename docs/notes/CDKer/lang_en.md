---
title: lang_en
createTime: 2025/10/04 23:28:55
permalink: /notes/CDKer/lang_en/
---
# lang_en.yml 语言文件配置文档

`lang_en.yml` 文件包含了 CDKer 插件的所有英文消息和提示。通过修改此文件，您可以自定义插件在游戏内显示的所有文本内容，包括命令帮助、错误消息、成功提示等。

## 配置项说明

以下是 `lang_en.yml` 文件中包含的主要配置项及其用途：

### 通用消息

*   **prefix**: `"&7[&bCDK&7] &r"`
    *   **描述**: 插件在聊天框中发送的所有消息的前缀。支持 Minecraft 颜色代码。
*   **no_permission**: `"&cYou do not have permission to execute this command!"`
    *   **描述**: 当玩家没有足够权限执行某个命令时显示的错误消息。
*   **unknown_command**: `"&cUnknown command! Use /cdk help for a list of commands."`
    *   **描述**: 当玩家输入未知命令时显示的错误消息。
*   **no_permission_use**: `"&cYou do not have permission to use this CDK!"`
    *   **描述**: 当玩家没有权限使用某个 CDK 时显示的错误消息。

### 帮助信息

*   **help_header**: `"&6===== &e&lCDK Help &6=====&r"`
    *   **描述**: CDK 帮助信息的头部。
*   **help_create**: `"&b/cdk create single <id> <quantity> \"<command1|command2|...>\" [expiration_time] &7- Create one-time CDK"`
    *   **描述**: 创建一次性 CDK 命令的帮助信息。
*   **help_create_multiple**: `"&b/cdk create multiple <name> <id> <quantity> \"<command1|command2|...>\" [expiration_time] &7- Create multiple-use CDK\n&b/cdk create multiple random <quantity> \"<command1|command2|...>\" [expiration_time] &7- Create multiple-use CDK with random ID"`
    *   **描述**: 创建可多次使用 CDK 命令的帮助信息。
*   **help_add**: `"&b/cdk add <id> <quantity> &7- Bulk generate/increase uses for a CDK"`
    *   **描述**: 增加 CDK 使用次数命令的帮助信息。
*   **help_delete**: `"&b/cdk delete <cdk|id> <content> &7- Delete a CDK / Delete all CDKs under an ID"`
    *   **描述**: 删除 CDK 命令的帮助信息。
*   **help_list**: `"&b/cdk list &7- List all CDKs"`
    *   **描述**: 列出所有 CDK 命令的帮助信息。
*   **help_reload**: `"&b/cdk reload &7- Reload config and language files"`
    *   **描述**: 重载配置命令的帮助信息。
*   **help_export**: `"&b/cdk export &7- Export all CDKs"`
    *   **描述**: 导出 CDK 命令的帮助信息。
*   **help_use**: `"&b/cdk use <CDK> &7- Use a CDK"`
    *   **描述**: 使用 CDK 命令的帮助信息。
*   **help_footer**: `"&6========================="`
    *   **描述**: CDK 帮助信息的底部。

### 命令用法和示例

*   **create_usage_single**: `"Usage: /cdk create single <id> <quantity> \"<command1|command2|...>\" [expiration_time]"`
    *   **描述**: 创建一次性 CDK 的用法提示。
*   **create_usage_multiple_name**: `"Usage: /cdk create multiple <name> <id> <quantity> \"<command1|command2|...>\" [expiration_time]"`
    *   **描述**: 创建指定名称的多次使用 CDK 的用法提示。
*   **create_usage_multiple_random**: `"Usage: /cdk create multiple random <quantity> \"<command1|command2|...>\" [expiration_time]"`
    *   **描述**: 创建随机 ID 的多次使用 CDK 的用法提示。
*   **create_example_single**: `"Example: /cdk create single MY_CODE 1 \"give %player% diamond 1\" 2024-12-01 10:00"`
    *   **描述**: 创建一次性 CDK 的示例。
*   **create_example_multiple**: `"Example: /cdk create multiple vip666 redeem10diamond 999 \"give %player% diamond 10\" 2024-12-01 10:00"`
    *   **描述**: 创建多次使用 CDK 的示例。

### 错误和成功消息

*   **invalid_quantity**: `"&cQuantity must be a valid number!"`
    *   **描述**: 数量无效时显示的错误消息。
*   **invalid_cdk_type**: `"&cInvalid CDK type! Please use 'single' or 'multiple'."`
    *   **描述**: CDK 类型无效时显示的错误消息。
*   **invalid_date_format**: `"&cInvalid date format! Please useYYYY-MM-dd HH:mm format."`
    *   **描述**: 日期格式无效时显示的错误消息。
*   **create_success_single**: `"&aSuccessfully created single-use CDK, Quantity: &e%quantity%&a, ID: &e%id%"`
    *   **描述**: 成功创建一次性 CDK 的提示消息。`%quantity%` 和 `%id%` 会被替换为实际值。
*   **create_success_multiple**: `"&aSuccessfully created multiple-use CDK, Name: %cdk%, Uses: &e%quantity%&a, ID: &e%id%"`
    *   **描述**: 成功创建多次使用 CDK 的提示消息。`%cdk%`、`%quantity%` 和 `%id%` 会被替换为实际值。
*   **add_usage**: `"Usage: /cdk add <CDK> <id> \"<command1|command2|...>\" [expiration_time]"`
    *   **描述**: 添加 CDK 的用法提示。
*   **add_example**: `"Example: /cdk add ABC123 redeemdiamond \"give %player% diamond 1\" 2024-12-01 10:00"`
    *   **描述**: 添加 CDK 的示例。
*   **add_success**: `"&aSuccessfully added CDK, ID: &e%id%&a, Quantity: &e%quantity%"`
    *   **描述**: 成功添加 CDK 的提示消息。`%id%` 和 `%quantity%` 会被替换为实际值。
*   **cdk_already_exists**: `"&cCDK &e%cdk% &calready exists!"`
    *   **描述**: CDK 已经存在时显示的错误消息。`%cdk%` 会被替换为实际值。
*   **delete_usage**: `"Usage: /cdk delete <cdk|id> <content>"`
    *   **描述**: 删除 CDK 的用法提示。
*   **delete_success**: `"&aSuccessfully deleted CDK: &e%cdk%"`
    *   **描述**: 成功删除 CDK 的提示消息。`%cdk%` 会被替换为实际值。
*   **cdk_not_found**: `"&cCDK &e%cdk% &cnot found!"`
    *   **描述**: CDK 不存在时显示的错误消息。`%cdk%` 会被替换为实际值。
*   **list_header**: `"&6===== &bCDK List &6=====&r"`
    *   **描述**: CDK 列表的头部。
*   **list_item**: `"&b%cdk% &7- &a%id% &7- &e%commands% &7- &c%expiration%"`
    *   **描述**: CDK 列表中的每个条目。`%cdk%`、`%id%`、`%commands%` 和 `%expiration%` 会被替换为实际值。
*   **list_footer**: `"&6===================="`
    *   **描述**: CDK 列表的底部。
*   **list_empty**: `"&cNo CDKs currently available!"`
    *   **描述**: CDK 列表为空时显示的提示消息。
*   **reload_success**: `"&aSuccessfully reloaded config and language files!"`
    *   **描述**: 成功重载配置的提示消息。
*   **export_success**: `"&aSuccessfully exported all CDKs to &e%file%&a!"`
    *   **描述**: 成功导出 CDK 的提示消息。`%file%` 会被替换为实际文件名。
*   **export_failed**: `"&cError exporting CDKs!"`
    *   **描述**: 导出 CDK 失败时显示的错误消息。
*   **use_usage**: `"Usage: /cdk use <CDK>"`
    *   **描述**: 使用 CDK 的用法提示。
*   **use_player_only**: `"&cOnly players can use CDKs!"`
    *   **描述**: 只有玩家才能使用 CDK 时显示的错误消息。
*   **use_success**: `"&aSuccessfully used CDK: &e%cdk%&a!"`
    *   **描述**: 成功使用 CDK 的提示消息。`%cdk%` 会被替换为实际值。
*   **cdk_expired**: `"&cCDK &e%cdk% &chas expired!"`
    *   **描述**: CDK 已过期时显示的错误消息。`%cdk%` 会被替换为实际值。
*   **cdk_already_used**: `"&cYou have already used this CDK!"`
    *   **描述**: CDK 已经被使用过时显示的错误消息。

### 内部错误消息

*   **save_config_error**: `"&cError saving config file!"`
    *   **描述**: 保存配置文件时发生的内部错误消息。
*   **save_cdk_error**: `"&cError saving CDK data!"`
    *   **描述**: 保存 CDK 数据时发生的内部错误消息。
*   **save_log_error**: `"&cError saving log data!"`
    *   **描述**: 保存日志数据时发生的内部错误消息。