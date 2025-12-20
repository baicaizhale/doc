---
title: permissions
createTime: 2025/12/21 02:02:26
---
# 权限节点

LiteMotto 使用权限节点来控制功能访问。

| 权限节点 | 默认所有者 | 关联命令/功能 |
| :--- | :--- | :--- |
| `litemotto.gen` | OP | 允许使用 `/litemotto gen` |
| `litemotto.debug` | OP | 允许使用 `/litemotto debug` |
| `litemotto.reload` | OP | 允许使用 `/litemotto reload` |
| `litemotto.update` | OP | 允许使用 `/litemotto update` |

## 权限建议
- **普通玩家**: 通常不需要分配任何权限。
- **管理员/技术人员**: 建议分配 `litemotto.*` 或以上所有权限。
