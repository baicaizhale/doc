---
title: AddCommandExecutor
createTime: 2025/10/04 23:29:53
permalink: /notes/CDKer/AddCommandExecutor/
---
# AddCommandExecutor.java

`AddCommandExecutor.java` 文件定义了 `AddCommandExecutor` 类，该类负责处理 `/cdk add` 命令的逻辑。此命令允许管理员向现有的 CDK 增加使用次数。

## 类结构

### `AddCommandExecutor` 类

- **包**: `org.baicaizhale.cDKer.command`
- **描述**: 处理 `/cdk add` 命令的执行器。

### 字段

- `private final CDKer plugin;`
  - **描述**: `CDKer` 插件主类的实例，用于访问插件的日志记录器等功能。
- `private final ConfigurationManager configManager;`
  - **描述**: 配置管理器实例，用于管理 CDK 配置的加载和保存。

### 构造函数

- `public AddCommandExecutor(CDKer plugin, ConfigurationManager configManager)`
  - **参数**:
    - `plugin`: `CDKer` 插件主类的实例。
    - `configManager`: 配置管理器实例。
  - **描述**: 构造函数，初始化 `AddCommandExecutor` 实例，并传入插件主类和配置管理器。

### 方法

#### `handleAddCommand`

- **签名**: `public boolean handleAddCommand(CommandSender sender, String[] args, String prefix, LanguageConfig langConfig)`
- **参数**:
  - `sender`: 命令发送者 (通常是玩家或控制台)。
  - `args`: 命令参数数组。预期格式为 `["add", "<CDK码>", "<数量>"]`。
  - `prefix`: 插件消息前缀。
  - `langConfig`: 语言配置实例，用于获取本地化的消息。
- **返回**: `boolean` - 命令是否成功执行。
- **描述**: 处理添加 CDK 命令的逻辑。它会检查发送者权限，验证参数数量和格式，查找指定的 CDK，然后增加其剩余使用次数并保存配置。最后，向发送者发送成功或失败消息。

- **逻辑详情**:
  1. **权限检查**: 调用 `checkPermission` 方法，确保发送者拥有 `cdk.add` 权限。如果权限不足，发送无权限消息并返回。
  2. **参数数量检查**: 检查 `args` 数组的长度是否小于 3。如果不足，发送 `add` 命令的使用方法消息并返回。
  3. **CDK 码获取**: 从 `args[1]` 获取 CDK 码。
  4. **数量解析**: 尝试将 `args[2]` 解析为整数 `quantityToAdd`。如果解析失败 (非数字)，发送无效数量消息并返回。
  5. **CDK 查找**: 从 `configManager` 中获取与 `cdkCode` 对应的 `CDK` 对象。如果 CDK 不存在，发送 CDK 未找到消息并返回。
  6. **增加使用次数**: 更新找到的 CDK 对象的 `remainingUses`，将其增加 `quantityToAdd`。
  7. **保存配置**: 调用 `configManager.saveCdkConfig()` 保存更新后的 CDK 配置。
  8. **发送成功消息**: 向发送者发送包含 CDK 码和增加数量的成功消息。

#### `checkPermission`

- **签名**: `private boolean checkPermission(CommandSender sender, String permission, String prefix, LanguageConfig langConfig)`
- **参数**:
  - `sender`: 命令发送者。
  - `permission`: 需要检查的权限字符串。
  - `prefix`: 插件消息前缀。
  - `langConfig`: 语言配置实例。
- **返回**: `boolean` - 如果发送者拥有指定权限则返回 `true`，否则返回 `false`。
- **描述**: 这是一个辅助方法，用于检查命令发送者是否拥有执行特定命令所需的权限。如果发送者没有权限，则会向其发送无权限消息。

## 示例代码

```java
package org.baicaizhale.cDKer.command;

import org.baicaizhale.cDKer.CDKer;
import org.baicaizhale.cDKer.manager.ConfigurationManager;
import org.baicaizhale.cDKer.model.CDK;
import org.baicaizhale.cDKer.model.LanguageConfig;
import org.bukkit.ChatColor;
import org.bukkit.command.CommandSender;

/**
 * 处理 /cdk add 命令的执行器。
 */
public class AddCommandExecutor {

    private final CDKer plugin;
    private final ConfigurationManager configManager;

    public AddCommandExecutor(CDKer plugin, ConfigurationManager configManager) {
        this.plugin = plugin;
        this.configManager = configManager;
    }

    /**
     * 处理添加 CDK 命令的逻辑。
     * @param sender 命令发送者
     * @param args 命令参数
     * @param prefix 插件前缀
     * @param langConfig 语言配置
     * @return 命令是否成功执行
     */
    public boolean handleAddCommand(CommandSender sender, String[] args, String prefix, LanguageConfig langConfig) {
        if (!checkPermission(sender, "cdk.add", prefix, langConfig)) return true;

        if (args.length < 3) {
            String addUsageMessage = ChatColor.translateAlternateColorCodes('&', prefix + langConfig.getMessage("add_usage"));
            sender.sendMessage(addUsageMessage);
            plugin.getLogger().info("[To Player] " + sender.getName() + ": " + addUsageMessage);
            return true;
        }

        String cdkCode = args[1];
        int quantityToAdd;
        try {
            quantityToAdd = Integer.parseInt(args[2]);
        } catch (NumberFormatException e) {
            String invalidQuantityMessage = ChatColor.translateAlternateColorCodes('&', prefix + langConfig.getMessage("invalid_quantity"));
            sender.sendMessage(invalidQuantityMessage);
            plugin.getLogger().info("[To Player] " + sender.getName() + ": " + invalidQuantityMessage);
            return true;
        }

        CDK cdk = configManager.getCdkMap().get(cdkCode);
        if (cdk == null) {
            String cdkNotFoundMessage = ChatColor.translateAlternateColorCodes('&', prefix + langConfig.getMessage("cdk_not_found").replace("%cdk%", cdkCode));
            sender.sendMessage(cdkNotFoundMessage);
            plugin.getLogger().info("[To Player] " + sender.getName() + ": " + cdkNotFoundMessage);
            return true;
        }

        cdk.setRemainingUses(cdk.getRemainingUses() + quantityToAdd);
        configManager.saveCdkConfig();

        String addSuccessMessage = ChatColor.translateAlternateColorCodes('&', prefix + langConfig.getMessage("add_success")
                .replace("%id%", cdkCode)
                .replace("%quantity%", String.valueOf(quantityToAdd)));
        sender.sendMessage(addSuccessMessage);
        plugin.getLogger().info("[To Player] " + sender.getName() + ": " + addSuccessMessage);
        return true;
    }

    /**
     * 检查玩家是否有执行命令的权限。
     * @param sender 命令发送者
     * @param permission 所需权限
     * @param prefix 插件前缀
     * @param langConfig 语言配置
     * @return 如果玩家有权限则返回 true，否则返回 false
     */
    private boolean checkPermission(CommandSender sender, String permission, String prefix, LanguageConfig langConfig) {
        if (!sender.hasPermission(permission)) {
            String noPermissionMessage = ChatColor.translateAlternateColorCodes('&', prefix + langConfig.getMessage("no_permission"));
            sender.sendMessage(noPermissionMessage);
            plugin.getLogger().info("[To Player] " + sender.getName() + ": " + noPermissionMessage);
            return false;
        }
        return true;
    }
}
```