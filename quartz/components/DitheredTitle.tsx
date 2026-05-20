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
@media (max-width: 1199px) {
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
  opacity: 0;
  transition: opacity 0.7s cubic-bezier(0, 0, 0.2, 1);
}
.dithered-title canvas.loaded {
  opacity: 0.65;
}
.dithered-title a:hover canvas.loaded {
  opacity: 1;
  transition: opacity 0.3s var(--ease);
}
`

DitheredTitle.afterDOMLoaded = script

export default (() => DitheredTitle) satisfies QuartzComponentConstructor
