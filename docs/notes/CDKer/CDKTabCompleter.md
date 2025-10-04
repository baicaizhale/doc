---
title: CDKTabCompleter
createTime: 2025/10/04 23:29:34
permalink: /notes/CDKer/CDKTabCompleter/
---
# CDKTabCompleter.java

`CDKTabCompleter.java` 文件定义了 `CDKTabCompleter` 类，该类实现了 Bukkit 的 `TabCompleter` 接口，为 `CDKer` 插件的 `/cdk` 命令提供 Tab 自动补全功能。这极大地提升了用户在输入命令时的体验，减少了输入错误。

## 类结构

### `CDKTabCompleter` 类

- **包**: `org.baicaizhale.cDKer`
- **实现接口**: `org.bukkit.command.TabCompleter`
- **描述**: CDK 命令的 Tab 补全器，用于自动补全子命令和参数。

### 字段

- `private final ConfigurationManager configManager;`
  - **描述**: 配置管理器实例，用于访问插件的配置信息。
- `private final List<String> subCommands = Arrays.asList("help", "create", "add", "delete", "list", "reload", "export", "use");`
  - **描述**: 定义了 `/cdk` 命令支持的所有子命令列表。

### 构造函数

- `public CDKTabCompleter(ConfigurationManager configManager)`
  - **参数**: `configManager` - 配置管理器实例。
  - **描述**: 构造函数，初始化 `CDKTabCompleter` 实例，并传入 `ConfigurationManager`。

### 方法

#### `onTabComplete`

- **签名**: `public List<String> onTabComplete(CommandSender sender, Command command, String alias, String[] args)`
- **参数**:
  - `sender`: 命令发送者。
  - `command`: 命令对象。
  - `alias`: 命令别名。
  - `args`: 命令参数数组。
- **返回**: 可能的补全选项列表。
- **描述**: 处理 Tab 补全逻辑。根据当前输入的参数数量和内容，提供相应的子命令、CDK 类型、CDK 码、数量、命令列表或过期时间等补全建议。

- **逻辑详情**:
  - **`args.length == 1`**: 补全所有子命令 (`help`, `create`, `add`, `delete`, `list`, `reload`, `export`, `use`)。
  - **`args.length == 2`**:
    - 如果子命令是 `create`，补全 CDK 类型 (`single`, `multiple`)。
    - 其他子命令不提供补全。
  - **`args.length == 3 && args[0].equalsIgnoreCase("create")`**:
    - 如果是 `multiple` 类型，补全 `<name|random>`。
    - 否则（`single` 类型），补全 `<CDK码>`。
  - **`args.length == 4 && args[0].equalsIgnoreCase("create")`**:
    - 如果是 `multiple` 类型且 `random` 模式，补全 `<数量>`。
    - 如果是 `multiple` 类型且非 `random` 模式，补全 `<CDK码>`。
    - 否则（`single` 类型），补全 `<数量>`。
  - **`args.length == 5 && args[0].equalsIgnoreCase("create")`**:
    - 如果是 `multiple` 类型且 `random` 模式，补全 `<命令1|命令2|...>`。
    - 如果是 `multiple` 类型且非 `random` 模式，补全 `<数量>`。
    - 否则（`single` 类型），补全 `<命令1|命令2|...>`。
  - **`args.length == 6 && args[0].equalsIgnoreCase("create")`**:
    - 如果是 `multiple` 类型且 `random` 模式，补全 `<yyyy-MM-dd HH:mm>` (过期时间)。
    - 如果是 `multiple` 类型且非 `random` 模式，补全 `<命令1|命令2|...>`。
    - 否则（`single` 类型），补全 `<yyyy-MM-dd HH:mm>` (过期时间)。
  - **`args.length == 7 && args[0].equalsIgnoreCase("create") && args[1].equalsIgnoreCase("multiple") && !args[2].equalsIgnoreCase("random")`**:
    - 补全 `<yyyy-MM-dd HH:mm>` (过期时间)。
  - 最后，根据当前输入的最后一个参数，过滤并返回匹配的补全选项。

## 示例代码

```java
package org.baicaizhale.cDKer;

import org.baicaizhale.cDKer.manager.ConfigurationManager;
import org.bukkit.command.Command;
import org.bukkit.command.CommandSender;
import org.bukkit.command.TabCompleter;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

/**
 * CDK 命令的 Tab 补全器，用于自动补全子命令和参数。
 */
public class CDKTabCompleter implements TabCompleter {

    private final ConfigurationManager configManager;
    private final List<String> subCommands = Arrays.asList("help", "create", "add", "delete", "list", "reload", "export", "use");

    /**
     * 构造函数
     * @param configManager 配置管理器实例
     */
    public CDKTabCompleter(ConfigurationManager configManager) {
        this.configManager = configManager;
    }

    /**
     * 处理 Tab 补全逻辑。
     * @param sender 命令发送者
     * @param command 命令对象
     * @param alias 命令别名
     * @param args 命令参数
     * @return 可能的补全选项列表
     */
    @Override
    public List<String> onTabComplete(CommandSender sender, Command command, String alias, String[] args) {
        List<String> completions = new ArrayList<>();

        if (args.length == 1) {
            // 补全子命令
            completions.addAll(subCommands);
        } else if (args.length == 2) {
            String subCommand = args[0].toLowerCase();
            switch (subCommand) {
                case "delete":
                case "add":
                case "use":
                    break;
                case "create":
                    // 补全 CDK 类型
                    completions.addAll(Arrays.asList("single", "multiple"));
                    break;
            }
        } else if (args.length == 3 && args[0].equalsIgnoreCase("create")) {
            if (args[1].equalsIgnoreCase("multiple")) {
                // 补全 <name|random>
                completions.addAll(Arrays.asList("name", "random"));
            } else {
                // 补全 CDK 码（创建时）
                completions.add("<CDK码>");
            }
        } else if (args.length == 4 && args[0].equalsIgnoreCase("create")) {
            if (args[1].equalsIgnoreCase("multiple")) {
                if (args[2].equalsIgnoreCase("random")) {
                    // 补全数量
                    completions.add("<数量>");
                } else {
                    // 补全 CDK 码（创建时）
                    completions.add("<CDK码>");
                }
            } else {
                // 补全数量
                completions.add("<数量>");
            }
        } else if (args.length == 5 && args[0].equalsIgnoreCase("create")) {
            if (args[1].equalsIgnoreCase("multiple")) {
                if (args[2].equalsIgnoreCase("random")) {
                    // 补全命令
                    completions.add("<命令1|命令2|...>");
                } else {
                    // 补全数量
                    completions.add("<数量>");
                }
            } else {
                // 补全命令
                completions.add("<命令1|命令2|...>");
            }
        } else if (args.length == 6 && args[0].equalsIgnoreCase("create")) {
            if (args[1].equalsIgnoreCase("multiple")) {
                if (args[2].equalsIgnoreCase("random")) {
                    // 补全过期时间
                    completions.add("<yyyy-MM-dd HH:mm>");
                } else {
                    // 补全命令
                    completions.add("<命令1|命令2|...>");
                }
            }
            else {
                // 补全过期时间
                completions.add("<yyyy-MM-dd HH:mm>");
            }
        } else if (args.length == 7 && args[0].equalsIgnoreCase("create") && args[1].equalsIgnoreCase("multiple") && !args[2].equalsIgnoreCase("random")) {
            // 补全过期时间
            completions.add("<yyyy-MM-dd HH:mm>");
        }

        // 过滤匹配当前输入的补全选项
        return completions.stream()
                .filter(s -> s.toLowerCase().startsWith(args[args.length - 1].toLowerCase()))
                .collect(Collectors.toList());
    }
}
```