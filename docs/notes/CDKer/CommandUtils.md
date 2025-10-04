---
title: CommandUtils
createTime: 2025/10/04 23:30:04
permalink: /notes/CDKer/CommandUtils/
---
# CommandUtils.java

`CommandUtils.java` 文件定义了 `CommandUtils` 类，这是一个命令行工具类，提供通用的命令相关功能，特别是权限检查。

## 类结构

### `CommandUtils` 类

- **包**: `org.baicaizhale.cDKer.command`
- **描述**: 命令行工具类，提供通用的命令相关功能。

### 方法

#### `checkPermission`

- **签名**: `public static boolean checkPermission(CommandSender sender, String permission, String prefix, LanguageConfig langConfig)`
- **参数**:
  - `sender`: 命令发送者 (通常是玩家或控制台)。
  - `permission`: 所需权限字符串。
  - `prefix`: 插件消息前缀。
  - `langConfig`: 语言配置实例，用于获取本地化的消息。
- **返回**: `boolean` - 如果命令发送者拥有指定权限则返回 `true`，否则返回 `false`。
- **描述**: 这是一个静态辅助方法，用于检查命令发送者是否拥有执行特定命令所需的权限。如果发送者没有权限，则会向其发送无权限消息。

- **逻辑详情**:
  1. **权限检查**: 调用 `sender.hasPermission(permission)` 检查发送者是否拥有指定的权限。
  2. **发送无权限消息**: 如果发送者没有权限，则从 `langConfig` 获取 `no_permission` 消息，并使用 `ChatColor.translateAlternateColorCodes` 处理颜色代码，然后发送给发送者。
  3. **返回结果**: 如果有权限返回 `true`，否则返回 `false`。

## 示例代码

```java
package org.baicaizhale.cDKer.command;

import org.baicaizhale.cDKer.model.LanguageConfig;
import org.bukkit.ChatColor;
import org.bukkit.command.CommandSender;

/**
 * 命令行工具类，提供通用的命令相关功能。
 */
public class CommandUtils {

    /**
     * 检查命令发送者是否有执行命令的权限。
     * @param sender 命令发送者
     * @param permission 所需权限
     * @param prefix 插件前缀
     * @param langConfig 语言配置
     * @return 如果玩家有权限则返回 true，否则返回 false
     */
    public static boolean checkPermission(CommandSender sender, String permission, String prefix, LanguageConfig langConfig) {
        if (!sender.hasPermission(permission)) {
            String noPermissionMessage = ChatColor.translateAlternateColorCodes('&', prefix + langConfig.getMessage("no_permission"));
            sender.sendMessage(noPermissionMessage);
            // plugin.getLogger().info("[To Player] " + sender.getName() + ": " + noPermissionMessage); // 移除此行，因为 CommandUtils 不应该直接访问 plugin 实例
            return false;
        }
        return true;
    }
}
```