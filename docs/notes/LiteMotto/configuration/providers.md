---
title: providers
createTime: 2025/12/21 02:02:26
---
# AI 提供商详解

LiteMotto 目前支持两个主流 AI 提供商。

## 1. Cloudflare Workers AI
Cloudflare 提供了极具性价比的模型。

### 配置项
- `api-key`: 您的 API Token。
- `model`: 默认使用 `@cf/openai/gpt-oss-120b`。
- **优点**: 免费额度高（如果是 Free 计划）。
- **缺点**: 在部分地区网络连接可能不够稳定。

## 2. SiliconFlow (硅基流动)
国内领先的 AI 模型托管平台，速度快，支持中文模型。

### 配置项
- `siliconflow.api-key`: 您的 API Key。
- `siliconflow.model`: 推荐使用 `Qwen/Qwen2.5-72B-Instruct`。
- `siliconflow.api-url`: 默认 `https://api.siliconflow.cn/v1/chat/completions`。
- **优点**: 国内访问极速，对中文理解更透彻。
- **缺点**: 部分模型可能按量计费。

## 如何选择？
- **追求速度与稳定性**: 首选 SiliconFlow。
- **追求完全免费**: 尝试 Cloudflare。
