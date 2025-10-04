---
title: CDKer
createTime: 2025/10/04 23:29:08
permalink: /notes/CDKer/CDKer/
---
# CDKer.java 核心类文档

`CDKer.java` 是插件的主类，继承自 `JavaPlugin`。它负责插件的生命周期管理，包括插件的启用、禁用以及配置管理器的初始化和加载。

## 类结构

```java
package org.baicaizhale.cDKer;

import org.baicaizhale.cDKer.manager.ConfigurationManager;
import org.bukkit.plugin.java.JavaPlugin;

public class CDKer extends JavaPlugin {

    private ConfigurationManager configurationManager;

    @Override
    public void onEnable() {
        // ...
    }

    @Override
    public void onDisable() {
        // ...
    }

    public ConfigurationManager getConfigurationManager() {
        // ...
    }
}
```

## 字段

*   **`private ConfigurationManager configurationManager;`**
    *   **描述**: 插件的配置管理器实例，负责加载和保存插件的所有配置文件。

## 方法

### `onEnable()`

```java
@Override
public void onEnable() {
    // 初始化配置管理器
    this.configurationManager = new ConfigurationManager(this);
    // 加载所有配置
    configurationManager.loadAllConfigs();

    // 注册命令执行器
    this.getCommand("cdk").setExecutor(new CDKCommandExecutor(this));
    this.getCommand("cdk").setTabCompleter(new CDKTabCompleter(configurationManager));

    getLogger().info("CDKer has been enabled!");
}
```

*   **描述**: 插件启用时调用的方法。在此方法中，插件会执行以下操作：
    1.  初始化 `ConfigurationManager`。
    2.  加载所有配置文件。
    3.  注册 `cdk` 命令的执行器 (`CDKCommandExecutor`) 和 Tab 补全器 (`CDKTabCompleter`)。
    4.  在控制台输出插件启用信息。

### `onDisable()`

```java
@Override
public void onDisable() {
    // 保存配置
    configurationManager.saveCdkConfig();
    configurationManager.saveUsedCodesConfig();
    getLogger().info("CDKer 插件已禁用！");
}
```

*   **描述**: 插件禁用时调用的方法。在此方法中，插件会执行以下操作：
    1.  保存 CDK 配置。
    2.  保存已使用的 CDK 记录。
    3.  在控制台输出插件禁用信息。

### `getConfigurationManager()`

```java
/**
 * 获取配置管理器实例。
 * @return ConfigurationManager 实例
 */
public ConfigurationManager getConfigurationManager() {
    return configurationManager;
}
```

*   **描述**: 获取当前插件的 `ConfigurationManager` 实例，允许其他类访问和管理插件的配置。
*   **返回值**: `ConfigurationManager` 实例。