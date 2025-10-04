---
title: cdk
createTime: 2025/10/04 23:28:21
permalink: /notes/CDKer/cdk/
---
# cdk.yml 配置文档

`cdk.yml` 文件用于定义和管理插件中的礼品码 (CDK)。每个礼品码都包含其类型、执行的命令、剩余使用次数以及可选的过期时间。

## 礼品码结构

每个礼品码条目都遵循以下结构：

*   **`CDK_NAME`** (例如: `ONETIME_DIAMOND_CDK`, `VIP_REWARD_CDK`, `LIMITED_TIME_SWORD`)
    *   这是礼品码的唯一标识符。
    *   **type**: `"single"` 或 `"multiple"`
        *   **描述**: 定义礼品码的使用类型。
        *   `"single"`: 一次性礼品码，每个礼品码只能被使用一次。
        *   `"multiple"`: 多次使用礼品码，可以被多次使用，直到 `remainingUses` 耗尽或过期。
    *   **commands**: `["命令1", "命令2", ...]`
        *   **描述**: 当玩家成功使用此礼品码时将执行的命令列表。`%player%` 占位符会被替换为使用礼品码的玩家名称。
    *   **remainingUses**: `整数`
        *   **描述**: 礼品码的剩余使用次数。当 `type` 为 `"single"` 时，通常设置为 `1`。当 `type` 为 `"multiple"` 时，可以设置为任意正整数。
    *   **expiration**: `"YYYY-MM-dd HH:mm"` (可选)
        *   **描述**: 礼品码的过期时间。如果设置，礼品码将在指定时间后失效。格式必须为 `YYYY-MM-dd HH:mm`。

## 示例

### ONETIME_DIAMOND_CDK (一次性钻石礼品码)

```yaml
ONETIME_DIAMOND_CDK:
  type: "single"
  commands:
    - "say %player% 兑换了一个一次性钻石CDK！"
    - "give %player% diamond 1"
  remainingUses: 1
```

*   **说明**: 这是一个一次性礼品码，玩家使用后会获得一个钻石，并发送一条消息。只能使用一次。

### VIP_REWARD_CDK (VIP 奖励礼品码)

```yaml
VIP_REWARD_CDK:
  type: "multiple"
  commands:
    - "say %player% 兑换了VIP奖励！"
    - "give %player% gold_ingot 5"
  remainingUses: 999
  expiration: "2025-12-31 23:59"
```

*   **说明**: 这是一个可多次使用的礼品码，玩家使用后会获得 5 个金锭，并发送一条消息。此礼品码有 999 次使用次数，并将在 2025 年 12 月 31 日 23:59 过期。

### LIMITED_TIME_SWORD (限时宝剑礼品码)

```yaml
LIMITED_TIME_SWORD:
  type: "single"
  commands:
    - "say %player% 获得了一把限时宝剑！"
    - "give %player% iron_sword 1"
  remainingUses: 1
  expiration: "2024-07-15 18:00"
```

*   **说明**: 这是一个一次性礼品码，玩家使用后会获得一把铁剑，并发送一条消息。此礼品码只能使用一次，并将在 2024 年 7 月 15 日 18:00 过期。