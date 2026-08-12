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
      // Keep slate for secondary links (skip Cursor's ember orange — too marketing).
      // Inline link-pill taupe/steel accents remain in custom.scss (--accent*).
      colors: {
        lightMode: {
          light: "#F7F7F4", // parchment canvas
          lightgray: "rgba(38, 37, 30, 0.1)", // warm hairline (stone)
          gray: "#7A7974", // ash — muted meta
          darkgray: "#26251E", // warm ink body
          dark: "#26251E", // headers ≈ body
          secondary: "#3C4A57", // muted slate — reads as color, not highlight
          tertiary: "#5A6B78", // quiet hover step
          highlight: "rgba(60, 74, 87, 0.06)",
          textHighlight: "rgba(60, 74, 87, 0.12)",
        },
        darkMode: {
          light: "#141413", // soft warm near-black
          lightgray: "rgba(247, 247, 244, 0.1)", // warm hairline
          gray: "#84847E", // driftwood meta
          darkgray: "#E8E6E3", // warm near-white body
          dark: "#F7F7F4", // parchment headers
          secondary: "#A8B4C0", // muted slate
          tertiary: "#8A98A4", // quiet hover step
          highlight: "rgba(255, 255, 255, 0.04)",
          textHighlight: "rgba(255, 255, 255, 0.08)",
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
