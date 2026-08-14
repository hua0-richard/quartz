import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Richard Hua",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "richardhua.dev",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        // Geist + Geist Mono (same pairing as gpu-store). Weights 400/500 only.
        header: { name: "Geist", weights: [400, 500], includeItalic: true },
        body: { name: "Geist", weights: [400, 500], includeItalic: true },
        code: { name: "Geist Mono", weights: [400, 500], includeItalic: false },
      },
      // Cursor-adjacent neutrals: warm parchment canvas + warm ink text.
      // Sole accent: ember dialed toward the canvas — still pops, less neon.
      colors: {
        lightMode: {
          light: "#F8F6E8", // cream parchment canvas
          lightgray: "rgba(38, 37, 30, 0.1)", // warm hairline (stone)
          gray: "#7A7974", // ash — muted meta
          darkgray: "#26251E", // warm ink body
          dark: "#26251E", // headers ≈ body
          secondary: "#E05418", // warm ember — sole accent
          tertiary: "#EE6A2C", // lighter ember hover step
          highlight: "rgba(224, 84, 24, 0.10)",
          textHighlight: "rgba(224, 84, 24, 0.18)",
        },
        darkMode: {
          light: "#17150F", // warm near-black
          lightgray: "rgba(248, 246, 232, 0.1)", // warm hairline
          gray: "#84847E", // driftwood meta
          darkgray: "#E8E6E3", // warm near-white body
          dark: "#F8F6E8", // parchment headers
          secondary: "#F06A38", // lifted warm ember
          tertiary: "#FF8354", // lighter ember hover step
          highlight: "rgba(240, 106, 56, 0.16)",
          textHighlight: "rgba(240, 106, 56, 0.24)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
