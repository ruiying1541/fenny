import {
  Stack, H1, H2, H3, Text, Divider, Pill, Grid, Card, CardBody, CardHeader, Row,
  useHostTheme, useCanvasAction, Button
} from "codeflicker/canvas";

const hotspots = [
  { rank: 1, title: "Figma Config 2026: Code Layers, Motion, Shaders & Generative Plugins", source: "Hacker News", category: "Design Systems", score: 98 },
  { rank: 2, title: "Framer AI Agent: Design and Publish Professional Sites with AI", source: "Product Hunt", category: "AI Design Tools", score: 94 },
  { rank: 3, title: "Design DNA for AI Agents: Embedding Design Principles in Autonomous Products", source: "Medium / Sidebar.io", category: "UX Research", score: 92 },
  { rank: 4, title: "AI-Powered Design System Components: The Next Generation of UI Kits", source: "Dribbble", category: "Design Systems", score: 91 },
  { rank: 5, title: "After AI Takes Everything: What Designers Do When AI Does the Craft", source: "Medium / Sidebar.io", category: "UX Research", score: 91 },
  { rank: 6, title: "The Layers of AI Experience: A Framework for AI-Native UX", source: "Medium / Sidebar.io", category: "UX Research", score: 90 },
  { rank: 7, title: "AI Taste as Design Differentiator", source: "Exploratory Search", category: "Design-to-Code", score: 90 },
  { rank: 8, title: "Figma MCP: A Game Changer for Design-Tool Integration", source: "Reddit", category: "Design-to-Code", score: 89 },
  { rank: 9, title: "Spatial Computing UI Explorations: AR/VR Interface Concepts", source: "Dribbble", category: "Spatial Computing", score: 89 },
  { rank: 10, title: "Is Accessibility Becoming a Competitive Advantage?", source: "Reddit", category: "Accessibility", score: 83 },
];

const trendKeywords = ["AI-Native Design", "Design DNA", "MCP Protocol", "Taste as Moat", "Spatial UI"];

const trendSummary = "5/10 hotspots point to AI-native design paradigm. Figma Config 2026 and Framer AI Agent drive the 'AI autonomous execution' turning point. Designers' core value shifts to taste, curation, and strategy when AI masters execution.";

export default function FennyPreview() {
  const { tokens: t } = useHostTheme();
  const dispatch = useCanvasAction();

  return (
    <Stack gap={20}>
      {/* Header */}
      <Stack gap={4}>
        <Row justify="space-between" align="center">
          <H1>Fenny</H1>
          <Row gap={12}>
            <Text weight="medium">Home</Text>
            <Text weight="medium" tone="secondary">Archive</Text>
          </Row>
        </Row>
        <Divider />
      </Stack>

      {/* Issue Hero */}
      <Stack gap={8}>
        <Row gap={8} align="center">
          <Pill size="sm" tone="info">Issue #1</Pill>
        </Row>
        <H2>AI-Native Design</H2>
        <Text tone="secondary">Fenny #1 · Week 2026-W26 · 2026-06-25</Text>
      </Stack>

      <Divider />

      {/* Section Label */}
      <Text size="small" weight="medium" tone="tertiary" style={{ textTransform: "uppercase", letterSpacing: "0.08em" }}>Top 10 Hotspots</Text>

      {/* Hotspot Cards */}
      <Stack gap={4}>
        {hotspots.map((h) => (
          <div key={h.rank} style={{
            display: "flex",
            gap: 12,
            padding: "8px 0",
            borderBottom: `1px solid ${t.stroke.tertiary}`,
            cursor: "pointer"
          }}>
            <div style={{
              fontSize: 18,
              fontWeight: 500,
              color: t.accent.primary,
              minWidth: 28,
              textAlign: "right",
              flexShrink: 0,
              lineHeight: 1
            }}>{h.rank}</div>
            <Stack gap={4} style={{ flex: 1, minWidth: 0 }}>
              <Text weight="medium" style={{ lineHeight: 1.3 }}>{h.title}</Text>
              <Row gap={6} align="center" wrap>
                <Pill size="sm" tone="neutral">{h.source}</Pill>
                <Pill size="sm" tone="info">{h.category}</Pill>
                <Text size="small" tone="tertiary">{h.score}</Text>
              </Row>
            </Stack>
          </div>
        ))}
      </Stack>

      {/* Trend Insight */}
      <Card>
        <CardHeader trailing={
          <Pill size="sm" tone="success">Trend Insight</Pill>
        }>
          <H3 style={{ margin: 0 }}>What shaped this week</H3>
        </CardHeader>
        <CardBody>
          <Text>{trendSummary}</Text>
          <Row gap={6} wrap style={{ marginTop: 8 }}>
            {trendKeywords.map((kw) => (
              <Pill key={kw} size="sm" tone="neutral">{kw}</Pill>
            ))}
          </Row>
        </CardBody>
      </Card>

      {/* Action */}
      <Row gap={12} justify="center">
        <Button onClick={() => dispatch({ type: "appendToAgentInput", text: "帮我优化 Fenny 网站的设计风格，让它更有视觉冲击力" })}>
          优化设计
        </Button>
        <Button onClick={() => dispatch({ type: "openExternal", url: "https://ruiying1541.github.io/fenny/" })}>
          访问线上站点
        </Button>
      </Row>
    </Stack>
  );
}
