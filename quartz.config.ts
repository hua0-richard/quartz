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
        header: { name: "Source Serif 4", weights: [400, 600], includeItalic: true },
        body: "Inter",
        code: "JetBrains Mono",
      },
      // Palette: pure achromatic monochrome (Tailwind neutral scale). Flat by design.
      // A muted taupe accent lives in custom.scss --accent for inline link pills only.
      colors: {
        lightMode: {
          light: "#FAFAFA", // pearl
          lightgray: "#E5E5E5", // brushed aluminum
          gray: "#A3A3A3", // nickel
          darkgray: "#525252", // graphite
          dark: "#0A0A0A", // graphite-black
          secondary: "#171717", // gunmetal
          tertiary: "#404040", // tungsten
          highlight: "rgba(10, 10, 10, 0.05)",
          textHighlight: "#E5E5E5",
        },
        darkMode: {
          light: "#0A0A0A", // anthracite
          lightgray: "#171717", // dark graphite
          gray: "#737373", // tungsten
          darkgray: "#E5E5E5", // brushed aluminum
          dark: "#FAFAFA", // polished platinum
          secondary: "#D4D4D4", // pale platinum
          tertiary: "#A3A3A3", // nickel
          highlight: "rgba(255, 255, 255, 0.05)",
          textHighlight: "rgba(255, 255, 255, 0.1)",
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
