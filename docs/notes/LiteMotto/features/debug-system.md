---
title: debug-system
createTime: 2025/12/21 02:02:26
---
# 调试系统 (Debug System)

LiteMotto 拥有完善的调试系统，专门为管理员设计。

## 如何使用
执行 `/litemotto debug`。
- **状态**: 这是一个开关命令，再次执行可关闭。
- **作用域**: 仅针对执行该命令的个人生效。

## 调试信息内容
开启后，当格言生成时，你会收到类似以下的信息：
- `[Debug] API Provider: SiliconFlow`
- `[Debug] Model: Qwen/Qwen2.5-72B-Instruct`
- `[Debug] Response Time: 1250ms`
- `[Debug] Status: Success`

## 为什么需要它？
当玩家反馈“收不到格言”时，管理员可以通过开启调试模式，亲自执行一次 `/litemotto gen`，直接在聊天框看到 API 是否返回了 401（Key 错误）、429（频率超限）或 500（服务器故障）。
