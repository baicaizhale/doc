---
title: advanced
createTime: 2025/12/21 02:02:26
---
# 进阶功能设置

## 自动热重载 (ConfigWatcher)
LiteMotto 内置了文件监控系统。
- **机制**: 当您保存 `config.yml` 时，插件会自动检测文件修改并应用。
- **优点**: 无需回到游戏输入命令，所见即所得。

## 配置文件自动迁移 (ConfigUpdater)
当插件升级到新版本且增加了新的配置项时：
- **机制**: 插件会自动对比您的 `config.yml` 与新版本的默认配置。
- **结果**: 自动插入缺失的配置项，并保留您已修改的值。

## 更新检查 (Update-Check)
```yaml
update-check:
  enabled: true          # 总开关
  on-startup: false      # 仅在服务器启动时检查
  on-admin-join: false   # 当拥有权限的管理员加入时提醒
```
- **说明**: 检查 GitHub 上的最新版本并通知管理员。
