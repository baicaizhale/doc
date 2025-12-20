---
title: metrics
createTime: 2025/12/21 02:02:26
---
# 统计与监控 (Metrics)

LiteMotto 集成了 [bStats](https://bstats.org/)，用于收集匿名的插件使用数据。

## 收集的数据包括：
- 服务器版本
- Java 版本
- 玩家在线人数
- 系统操作系统
- LiteMotto 插件版本

## 为什么收集这些？
这些数据可以帮助开发者了解插件的普及程度和运行环境，从而更好地进行优化和维护。

## 如何关闭？
如果您不希望发送这些数据，可以在服务器根目录的 `plugins/bStats/config.yml` 中将 `enabled` 设置为 `false`。
