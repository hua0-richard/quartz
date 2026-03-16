import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Quartz 4",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Lora",
        body: "Inter",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#FAFAF8",              // warm off-white background
          lightgray: "#F0EDE6",          // warm surface — mirrors dark mode's primary accent
          gray: "#B8B4AE",               // accent dim
          darkgray: "#6B6865",           // muted — body text
          dark: "#1C1917",               // near-black headings
          secondary: "#3A3835",          // warm dark — links, active states
          tertiary: "#1C1917",           // hover — darkens to heading level
          highlight: "rgba(28, 25, 23, 0.05)",
          textHighlight: "#F0EDE6",      // warm cream selection
        },
        darkMode: {
          light: "#0F0F0E",              // page background
          lightgray: "#1A1A18",          // surface — borders, subtle backgrounds
          gray: "#6B6865",               // muted — borders, tertiary text
          darkgray: "#B8B4AE",           // accent dim — body text
          dark: "#F0EDE6",               // primary accent — headings
          secondary: "#D4D0C9",          // link / underline accent
          tertiary: "#B8B4AE",           // hover — accent dim
          highlight: "rgba(240, 237, 230, 0.08)",  // accent soft — pill backgrounds
          textHighlight: "#222220",      // surface elevated — text selection bg
        },
      }
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
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
