# Fenny

> Product Design AI Hotspot Weekly - 产品设计 AI 热点周报

Fenny 是一个全自动的产品设计热点监控平台。每周五下午自动从海外主流设计社区采集热点，经 AI 筛选分析后生成 10 条精选周报，发布到 GitHub Pages 静态网站并同步推送 KIM Docs。

## 架构

```
[每周五 14:00 定时任务]
         |
         v
[主 Agent 编排]
    |
    +-- [fenny-collector] --> 采集原始数据 (30-50条)
    +-- [fenny-analyst]   --> 筛选分析 Top 10 + 趋势洞察
    +-- [fenny-publisher] --> 发布网站 + KIM Docs
```

## 数据源

| 来源 | 类型 | 采集方式 |
|------|------|----------|
| Product Hunt | 产品发布 | browser_agent / fetch_web |
| Hacker News | 技术讨论 | fetch_web (API) |
| Dribbble Popular | 设计作品 | browser_agent |
| Medium Design | 深度文章 | search_web + fetch_web |
| Reddit (r/UX, r/design) | 社区讨论 | search_web |
| Awwwards | 网站设计 | fetch_web |
| Sidebar.io | 设计通讯 | fetch_web |

## 目录结构

```
fenny/
  index.html          -- 首页（最新一期）
  archive.html        -- 归档页（历史列表）
  assets/style.css    -- 全局样式
  week/               -- 每周详情页
  data/               -- 每周结构化数据
  index.json          -- 全局索引
```

## 周报格式

每期 10 条热点，每条包含：
- 标题 + 来源 + 热度分
- 一句话摘要
- 为什么值得关注
- 外部链接

底部附趋势洞察（跨条目关联分析）。

## 许可

MIT
