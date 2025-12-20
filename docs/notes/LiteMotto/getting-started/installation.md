---
title: installation
createTime: 2025/12/21 02:02:26
---
# 插件安装

本指南将指导您在不同类型的 Minecraft 服务端上安装 LiteMotto。

## 环境要求
- **服务端**: Spigot, Paper, Purpur 或任何支持 Bukkit API 的服务端。
- **Java 版本**: 建议使用 Java 17 或更高版本（取决于您的服务端版本）。
- **网络环境**: 服务器需要能够访问互联网（特别是 API 提供商的接口）。

## 安装步骤

### 1. 下载插件
前往 [GitHub Releases](https://github.com/baicaizhale/LiteMotto/releases) 下载最新版本的 `LiteMotto-x.x.x.jar`。

### 2. 放置插件
将下载的 `.jar` 文件放入服务器根目录下的 `plugins` 文件夹中。

### 3. 首次启动
启动您的 Minecraft 服务器。LiteMotto 会在控制台输出如下信息：
```text
[LiteMotto] Loading LiteMotto v4.2.5
[LiteMotto] Enabling LiteMotto v4.2.5
[LiteMotto] LiteMotto 插件已启用！
```
此时，插件会自动在 `plugins/LiteMotto/` 目录下生成 `config.yml` 默认配置文件。

## 兼容性说明
- **1.18.x - 1.20.x**: 完全支持。
- **低版本**: 理论上支持 1.13+，但建议在 1.18+ 环境下运行以获得最佳体验。
