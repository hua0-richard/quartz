const STORAGE_KEY = "reader-mode"

function getStored(): "on" | "off" {
  try {
    return localStorage.getItem(STORAGE_KEY) === "on" ? "on" : "off"
  } catch {
    return "off"
  }
}

function setStored(mode: "on" | "off") {
  try {
    localStorage.setItem(STORAGE_KEY, mode)
  } catch {
    /* ignore */
  }
}

function isOn() {
  return document.documentElement.getAttribute("reader-mode") === "on"
}

function applyMode(mode: "on" | "off") {
  document.documentElement.setAttribute("reader-mode", mode)
  for (const btn of document.getElementsByClassName("readermode-toggle")) {
    btn.setAttribute("aria-pressed", mode === "on" ? "true" : "false")
  }
  const event: CustomEventMap["readermodechange"] = new CustomEvent("readermodechange", {
    detail: { mode },
  })
  document.dispatchEvent(event)
}

function isEditableTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return false
  const tag = target.tagName
  return tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || target.isContentEditable
}

document.addEventListener("nav", () => {
  applyMode(getStored())

  const toggle = () => {
    const next = isOn() ? "off" : "on"
    setStored(next)
    applyMode(next)
  }

  const exit = () => {
    if (isOn()) {
      setStored("off")
      applyMode("off")
    }
  }

  for (const btn of document.getElementsByClassName("readermode-toggle")) {
    btn.addEventListener("click", toggle)
    window.addCleanup(() => btn.removeEventListener("click", toggle))
  }

  const onKey = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      exit()
      return
    }
    if (isEditableTarget(e.target)) return
    if (e.metaKey || e.ctrlKey || e.altKey) return
    if (e.key === "r" || e.key === "R") {
      e.preventDefault()
      toggle()
    }
  }
  document.addEventListener("keydown", onKey)
  window.addCleanup(() => document.removeEventListener("keydown", onKey))
})
