import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
// @ts-ignore
import script from "./scripts/ditheredTitle.inline"

const DitheredTitle: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <div class={classNames(displayClass, "dithered-title")}>
      <a href={baseDir} aria-label="Home">
        <canvas id="dithered-canvas" width={140} height={100} />
      </a>
    </div>
  )
}

DitheredTitle.css = `
.dithered-title {
  margin: 0 0 0.5rem;
}
@media (max-width: 599px) {
  .dithered-title {
    display: none;
  }
}
.dithered-title a {
  display: block;
  border-radius: 6px;
  overflow: hidden;
}
.dithered-title canvas {
  width: 100%;
  aspect-ratio: 7 / 5;
  display: block;
  background: var(--bg);
  cursor: grab;
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
}
`

DitheredTitle.afterDOMLoaded = script

export default (() => DitheredTitle) satisfies QuartzComponentConstructor
