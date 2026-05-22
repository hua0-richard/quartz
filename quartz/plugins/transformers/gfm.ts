import remarkGfm from "remark-gfm"
import smartypants from "remark-smartypants"
import { QuartzTransformerPlugin } from "../types"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"

export interface Options {
  enableSmartyPants: boolean
  linkHeadings: boolean
}

const defaultOptions: Options = {
  enableSmartyPants: true,
  linkHeadings: true,
}

export const GitHubFlavoredMarkdown: QuartzTransformerPlugin<Partial<Options>> = (userOpts) => {
  const opts = { ...defaultOptions, ...userOpts }
  return {
    name: "GitHubFlavoredMarkdown",
    markdownPlugins() {
      return opts.enableSmartyPants ? [remarkGfm, smartypants] : [remarkGfm]
    },
    htmlPlugins() {
      if (opts.linkHeadings) {
        return [
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {
              behavior: "append",
              properties: {
                role: "anchor",
                ariaHidden: true,
                tabIndex: -1,
                "data-no-popover": true,
              },
              content: {
                type: "element",
                tagName: "svg",
                properties: {
                  width: 13,
                  height: 13,
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "1.6",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                },
                children: [
                  {
                    type: "element",
                    tagName: "path",
                    properties: {
                      d: "M9 17H7A5 5 0 1 1 7 7h2",
                    },
                    children: [],
                  },
                  {
                    type: "element",
                    tagName: "path",
                    properties: {
                      d: "M15 7h2a5 5 0 1 1 0 10h-2",
                    },
                    children: [],
                  },
                  {
                    type: "element",
                    tagName: "path",
                    properties: {
                      d: "M8 12h8",
                    },
                    children: [],
                  },
                ],
              },
            },
          ],
        ]
      } else {
        return []
      }
    },
  }
}
