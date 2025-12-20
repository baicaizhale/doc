---
title: quick-start
createTime: 2025/12/21 02:02:26
---
# 快速上手

只需三步，让您的服务器拥有自动生成格言的能力。

## 第一步：获取 API Key
LiteMotto 依赖外部 AI 平台。您需要先准备一个 API Key：
- **Cloudflare**: 获取您的 API Token 和 Account ID。
- **SiliconFlow (推荐)**: 注册并获取 API Key。

## 第二步：配置 API
打开 `plugins/LiteMotto/config.yml`：
1. 修改 `api-provider` 为你选择的平台（例如 `siliconflow`）。
2. 在对应的配置区域填入你的 `api-key`。

```yaml
api-provider: "siliconflow"
siliconflow:
  api-key: "sk-xxxxxxxxxxxx" # 填入你的 Key
```

## 第三步：测试生成
进入游戏，执行以下命令：
`/litemotto gen`

如果配置正确，您将立即收到一条由 AI 生成的哲理格言！

---
**提示**: 如果生成失败，请尝试开启调试模式 `/litemotto debug` 查看具体原因。
