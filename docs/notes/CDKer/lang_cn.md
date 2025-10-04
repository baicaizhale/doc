---
title: lang_cn
createTime: 2025/10/04 23:28:42
permalink: /notes/CDKer/lang_cn/
---
# lang_cn.yml 语言文件配置文档

`lang_cn.yml` 文件包含了 CDKer 插件的所有中文消息和提示。通过修改此文件，您可以自定义插件在游戏内显示的所有文本内容，包括命令帮助、错误消息、成功提示等。

## 配置项说明

以下是 `lang_cn.yml` 文件中包含的主要配置项及其用途：

### 通用消息

*   **prefix**: `"&7[&bCDK&7] &r"`
    *   **描述**: 插件在聊天框中发送的所有消息的前缀。支持 Minecraft 颜色代码。
*   **no_permission**: `"&c你没有权限执行此命令！"`
    *   **描述**: 当玩家没有足够权限执行某个命令时显示的错误消息。
*   **unknown_command**: `"&c未知命令！使用 /cdk help 查看命令列表。"`
    *   **描述**: 当玩家输入未知命令时显示的错误消息。
*   **no_permission_use**: `"&c你没有权限使用此 CDK！"`
    *   **描述**: 当玩家没有权限使用某个 CDK 时显示的错误消息。

### 帮助信息

*   **help_header**: `"&6===== &e&lCDK 帮助 &6=====&r"`
    *   **描述**: CDK 帮助信息的头部。
*   **help_create**: `"&b/cdk create single <id> <数量> \"<命令1|命令2|...>\" [有效时间] &7- 创建一次性CDK"`
    *   **描述**: 创建一次性 CDK 命令的帮助信息。
*   **help_create_multiple**: `"&b/cdk create multiple <name> <id> <数量> \"<命令1|命令2|...>\" [有效时间] &7- 创建可多次使用CDK\n&b/cdk create multiple random <数量> \"<命令1|命令2|...>\" [有效时间] &7- 创建随机ID的可多次使用CDK"`
    *   **描述**: 创建可多次使用 CDK 命令的帮助信息。
*   **help_add**: `"&b/cdk add <id> <数量> &7- 批量生成/增加可使用次数"`
    *   **描述**: 增加 CDK 使用次数命令的帮助信息。
*   **help_delete**: `"&b/cdk delete <cdk|id> <内容> &7- 删除CDK/删除此id和id下的所有CDK"`
    *   **描述**: 删除 CDK 命令的帮助信息。
*   **help_list**: `"&b/cdk list &7- 列出所有CDK"`
    *   **描述**: 列出所有 CDK 命令的帮助信息。
*   **help_reload**: `"&b/cdk reload &7- 重新加载配置和语言文件"`
    *   **描述**: 重载配置命令的帮助信息。
*   **help_export**: `"&b/cdk export &7- 导出所有CDK"`
    *   **描述**: 导出 CDK 命令的帮助信息。
*   **help_use**: `"&b/cdk use <CDK> &7- 使用一个CDK"`
    *   **描述**: 使用 CDK 命令的帮助信息。
*   **help_footer**: `"&6========================="`
    *   **描述**: CDK 帮助信息的底部。

### cdkadmin 命令帮助

*   **help_admin_header**: `"&6===== &e&lCDK 管理帮助 &6=====&r"`
    *   **描述**: CDK 管理帮助信息的头部。
*   **help_admin_create**: `"&b/cdkadmin create single <id> <数量> \"<命令1|命令2|...>\" [有效时间] &7- 创建一次性CDK"`
    *   **描述**: `cdkadmin` 创建一次性 CDK 命令的帮助信息。
*   **help_admin_create_multiple**: `"&b/cdkadmin create multiple <name> <id> <数量> \"<命令1|命令2|...>\" [有效时间] &7- 创建可多次使用CDK (指定名称)\n&b/cdkadmin create multiple random <数量> \"<命令1|命令2|...>\" [有效时间] &7- 创建可多次使用CDK (随机ID)"`
    *   **描述**: `cdkadmin` 创建可多次使用 CDK 命令的帮助信息。
*   **help_admin_add**: `"&b/cdkadmin add <id> <数量> &7- 批量生成/增加可使用次数"`
    *   **描述**: `cdkadmin` 增加 CDK 使用次数命令的帮助信息。
*   **help_admin_delete**: `"&b/cdkadmin delete <cdk|id> <内容> &7- 删除CDK/删除此id和id下的所有CDK"`
    *   **描述**: `cdkadmin` 删除 CDK 命令的帮助信息。
*   **help_admin_list**: `"&b/cdkadmin list &7- 列出所有CDK"`
    *   **描述**: `cdkadmin` 列出所有 CDK 命令的帮助信息。
*   **help_admin_reload**: `"&b/cdkadmin reload &7- 重新加载配置和语言文件"`
    *   **描述**: `cdkadmin` 重载配置命令的帮助信息。
*   **help_admin_export**: `"&b/cdkadmin export &7- 导出所有CDK"`
    *   **描述**: `cdkadmin` 导出 CDK 命令的帮助信息。
*   **help_admin_footer**: `"&6========================="`
    *   **描述**: CDK 管理帮助信息的底部。

### giftcode 命令帮助

*   **help_giftcode_header**: `"&6===== &e&l礼品码帮助 &6=====&r"`
    *   **描述**: 礼品码帮助信息的头部。
*   **help_giftcode_use**: `"&b/giftcode use <CDK> &7- 使用一个礼品码"`
    *   **描述**: 使用礼品码命令的帮助信息。
*   **help_giftcode_footer**: `"&6========================="`
    *   **描述**: 礼品码帮助信息的底部。

### 命令用法和示例

*   **create_usage_single**: `"用法: /cdk create single <id> <数量> \"<命令1|命令2|...>\" [有效时间]"`
    *   **描述**: 创建一次性 CDK 的用法提示。
*   **create_usage_multiple_name**: `"用法: /cdk create multiple <name> <id> <数量> \"<命令1|命令2|...>\" [有效时间]"`
    *   **描述**: 创建指定名称的多次使用 CDK 的用法提示。
*   **create_usage_multiple_random**: `"用法: /cdk create multiple random <数量> \"<命令1|命令2|...>\" [有效时间]"`
    *   **描述**: 创建随机 ID 的多次使用 CDK 的用法提示。
*   **create_example_single**: `"示例: /cdk create single 兑换1钻石 5 \"give %player% diamond 1\" 2024-12-01 10:00"`
    *   **描述**: 创建一次性 CDK 的示例。
*   **create_example_multiple**: `"示例: /cdk create multiple vip666 兑换10钻石 999 \"give %player% diamond 10\" 2024-12-01 10:00"`
    *   **描述**: 创建多次使用 CDK 的示例。

### 错误和成功消息

*   **invalid_quantity**: `"&c数量必须是一个有效的数字！"`
    *   **描述**: 数量无效时显示的错误消息。
*   **invalid_cdk_type**: `"&c无效的 CDK 类型！请使用 'single' 或 'multiple'。"`
    *   **描述**: CDK 类型无效时显示的错误消息。
*   **invalid_date_format**: `"&c无效的日期格式！请使用YYYY-MM-dd HH:mm 格式。"`
    *   **描述**: 日期格式无效时显示的错误消息。
*   **create_success_single**: `"&a成功创建一次性CDK，数量: &e%quantity%&a，ID: &e%id%"`
    *   **描述**: 成功创建一次性 CDK 的提示消息。`%quantity%` 和 `%id%` 会被替换为实际值。
*   **create_success_multiple**: `"&a成功创建多次使用CDK，名称: %cdk%，使用次数: &e%quantity%&a，ID: &e%id%"`
    *   **描述**: 成功创建多次使用 CDK 的提示消息。`%cdk%`、`%quantity%` 和 `%id%` 会被替换为实际值。
*   **add_usage**: `"用法: /cdk add <CDK> <id> \"<命令1|命令2|...>\" [有效时间]"`
    *   **描述**: 添加 CDK 的用法提示。
*   **add_example**: `"示例: /cdk add ABC123 兑换钻石 \"give %player% diamond 1\" 2024-12-01 10:00"`
    *   **描述**: 添加 CDK 的示例。
*   **add_success**: `"&a成功添加了CDK，ID: &e%id%&a，数量：&e%quantity%"`
    *   **描述**: 成功添加 CDK 的提示消息。`%id%` 和 `%quantity%` 会被替换为实际值。
*   **cdk_already_exists**: `"&cCDK &e%cdk% &c已经存在！"`
    *   **描述**: CDK 已经存在时显示的错误消息。`%cdk%` 会被替换为实际值。
*   **delete_usage**: `"用法: /cdk delete <cdk|id> <内容>"`
    *   **描述**: 删除 CDK 的用法提示。
*   **delete_success**: `"&a成功删除了 CDK: &e%cdk%"`
    *   **描述**: 成功删除 CDK 的提示消息。`%cdk%` 会被替换为实际值。
*   **cdk_not_found**: `"&cCDK &e%cdk% &c不存在！"`
    *   **描述**: CDK 不存在时显示的错误消息。`%cdk%` 会被替换为实际值。
*   **list_header**: `"&6===== &bCDK 列表 &6=====&r"`
    *   **描述**: CDK 列表的头部。
*   **list_item**: `"&b%cdk% &7- &a%id% &7- &e%commands% &7- &c%expiration%"`
    *   **描述**: CDK 列表中的每个条目。`%cdk%`、`%id%`、`%commands%` 和 `%expiration%` 会被替换为实际值。
*   **list_footer**: `"&6===================="`
    *   **描述**: CDK 列表的底部。
*   **list_empty**: `"&c当前没有任何 CDK！"`
    *   **描述**: CDK 列表为空时显示的提示消息。
*   **reload_success**: `"&a成功重新加载配置和语言文件！"`
    *   **描述**: 成功重载配置的提示消息。
*   **export_success**: `"&a成功导出所有 CDK 到 &e%file%&a！"`
    *   **描述**: 成功导出 CDK 的提示消息。`%file%` 会被替换为实际文件名。
*   **export_failed**: `"&c导出 CDK 时出错！"`
    *   **描述**: 导出 CDK 失败时显示的错误消息。
*   **use_usage**: `"用法: /cdk use <CDK>"`
    *   **描述**: 使用 CDK 的用法提示。
*   **use_player_only**: `"&c只有玩家可以使用 CDK！"`
    *   **描述**: 只有玩家才能使用 CDK 时显示的错误消息。
*   **use_success**: `"&a成功使用了 CDK: &e%cdk%&a！"`
    *   **描述**: 成功使用 CDK 的提示消息。`%cdk%` 会被替换为实际值。
*   **cdk_expired**: `"&cCDK &e%cdk% &c已过期！"`
    *   **描述**: CDK 已过期时显示的错误消息。`%cdk%` 会被替换为实际值。
*   **cdk_already_used**: `"&c你已经使用过这个 CDK 了！"`
    *   **描述**: CDK 已经被使用过时显示的错误消息。

### 内部错误消息

*   **save_config_error**: `"&c保存配置文件时出错！"`
    *   **描述**: 保存配置文件时发生的内部错误消息。
*   **save_cdk_error**: `"&c保存 CDK 数据时出错！"`
    *   **描述**: 保存 CDK 数据时发生的内部错误消息。
*   **save_log_error**: `"&c保存日志数据时出错！"`
    *   **描述**: 保存日志数据时发生的内部错误消息。