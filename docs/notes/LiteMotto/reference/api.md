---
title: api
createTime: 2025/12/21 02:02:26
---
# 开发者 API

如果您想在自己的插件中使用 LiteMotto 的格言生成能力，可以调用我们的 API。

## 1. 引入依赖
目前建议直接将 LiteMotto 的 `.jar` 作为外部库引入您的项目。

## 2. 获取 API 实例
LiteMotto 将 API 注册为 Bukkit 服务。

```java
import org.baicaizhale.litemotto.api.LiteMottoAPI;
import org.bukkit.Bukkit;
import org.bukkit.plugin.RegisteredServiceProvider;

public class MyPlugin extends JavaPlugin {
    private LiteMottoAPI getAPI() {
        RegisteredServiceProvider<LiteMottoAPI> rsp = Bukkit.getServer().getServicesManager().getRegistration(LiteMottoAPI.class);
        return (rsp != null) ? rsp.getProvider() : null;
    }
}
```

## 3. 核心方法

### `fetchMottoWithPrompt(String prompt)`
- **功能**: 根据指定的提示词生成格言。
- **注意**: **必须异步调用**。该方法会阻塞线程直到 API 返回。
- **返回**: 生成的格言字符串；若失败则返回 `null`。

```java
// 示例：异步获取并打印
Bukkit.getScheduler().runTaskAsynchronously(this, () -> {
    String motto = api.fetchMottoWithPrompt("写一句关于大海的格言");
    if (motto != null) {
        getLogger().info("生成的格言: " + motto);
    }
});
```

### `isAvailable()`
- **功能**: 检查 LiteMotto 插件是否已加载且处于启用状态。
