---
title: config
createTime: 2025/10/04 23:28:09
permalink: /notes/CDKer/config/
---
# config.yml 配置文档

`config.yml` 文件是 CDKer 插件的主配置文件，用于配置插件的全局行为，例如语言和消息前缀。此文件是插件正常运行所必需的。

## 配置项

*   **language**
    *   **描述**: 插件使用的语言。插件将根据此配置加载 `lang/lang_<language>.yml` 文件。
    *   **可选值**: 目前支持 `cn` (中文) 和 `en` (英文)。
    *   **默认值**: `"cn"`
    *   **示例**:
        ```yaml
        language: "cn"
        ```

*   **prefix**
    *   **描述**: 插件发送到聊天框的消息前缀。支持 Minecraft 颜色代码，例如 `&b` (青色), `&7` (灰色), `&f` (白色)。
    *   **默认值**: `"&bCDKer &7> &f"`
    *   **示例**:
        ```yaml
        prefix: "&bCDKer &7> &f"
        ```