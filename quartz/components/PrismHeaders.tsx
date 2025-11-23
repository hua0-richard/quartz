import { QuartzComponent, QuartzComponentConstructor } from "./types"
// @ts-ignore
import script from "./scripts/prism-headers.inline"

const PrismHeaders: QuartzComponent = () => {
    return null
}

PrismHeaders.beforeDOMLoaded = script

export default (() => PrismHeaders) satisfies QuartzComponentConstructor
