---
title: troubleshooting
createTime: 2025/12/21 02:02:26
---
# 故障排查指南

遇到问题？先看看这里。

## Q1: 玩家进服没反应
1. **检查权限**: 如果你设置了某些插件限制了玩家加入消息，可能会冲突。
2. **检查控制台**: 是否有 `[LiteMotto] 获取格言失败` 的警告？
3. **API 配置**: 检查 `api-provider` 是否正确，API Key 是否填入。

## Q2: 报错 `401 Unauthorized`
- **原因**: API Key 错误。
- **解决**: 检查并重新填入正确的 Key，确保没有多余的空格。

## Q3: 报错 `429 Too Many Requests`
- **原因**: 触发频率过高，超过了 API 提供商的免费/套餐限额。
- **解决**: 等待一段时间，或更换更高配额的 Key/提供商。

## Q4: 提示词 (Prompt) 修改后不生效
- **检查**: 确保你修改的是 `prompt:` 这一行。
- **检查**: 如果使用了中文，请确保 `config.yml` 的文件编码为 `UTF-8`。

## Q5: 服务器卡顿
- **分析**: LiteMotto 的所有 API 请求均在异步线程执行。
- **结论**: 插件本身不会导致主线程卡顿（TPS 下降）。如果感到卡顿，请检查是否是由于其他插件或网络环境抖动引起的。

---
如果以上方法都无法解决，请前往 [GitHub Issues](https://github.com/baicaizhale/LiteMotto/issues) 提交反馈，并附带您的 `config.yml` (隐藏 Key) 和错误日志。
