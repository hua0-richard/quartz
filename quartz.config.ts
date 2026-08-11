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
        // Grotesk-only. Weights 400/500 only — never load 600+.
        header: { name: "Inter", weights: [400, 500], includeItalic: true },
        body: { name: "Inter", weights: [400, 500], includeItalic: true },
        code: { name: "JetBrains Mono", weights: [400, 500], includeItalic: false },
      },
      // Warm off-white / soft near-black surfaces; one muted slate accent for links.
      // Inline link-pill taupe/steel accents remain in custom.scss (--accent*).
      colors: {
        lightMode: {
          light: "#FAFAF9", // warm off-white
          lightgray: "rgba(0, 0, 0, 0.07)", // hairline border
          gray: "#A1A1A1", // muted meta
          darkgray: "#0A0A0A", // near-black body
          dark: "#0A0A0A", // headers ≈ body
          secondary: "#3C4A57", // muted slate — reads as color, not highlight
          tertiary: "#5A6B78", // quiet hover step
          highlight: "rgba(60, 74, 87, 0.06)",
          textHighlight: "rgba(60, 74, 87, 0.12)",
        },
        darkMode: {
          light: "#0F0F0F", // soft near-black
          lightgray: "rgba(255, 255, 255, 0.08)", // hairline border
          gray: "#737373", // muted meta
          darkgray: "#E8E6E3", // warm near-white body
          dark: "#FAFAF9", // headers ≈ body
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
