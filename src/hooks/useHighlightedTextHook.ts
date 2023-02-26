import { useEffect, useState, useRef } from 'react'

export const useHighlightedTextHook = () => {
  const [showPopover, setShowPopover] = useState(false)
  const [axis, setAxis] = useState({
    x: 0,
    y: 0,
  })

  const [textRange, setTextRange] = useState({
    from: 0,
    to: 0,
  })
  const [selectedText, setSelectedText] = useState('')
  const highlight = useRef<any>()
  useEffect(() => {
    // window.addEventListener('mouseup', onMouseUp);
    // return () => window.removeEventListener('mouseup', onMouseUp);
  }, [])

  const hidePopover = () => {
    setShowPopover(false)
  }

  const onMouseUp = () => {
    const selection = window.getSelection()
    if (selection?.rangeCount === 0) {
      hidePopover()
      clearSelection()
    }
    const range = selection?.getRangeAt(0)
    const text = range?.toString()
    if (!text) {
      hidePopover()
      clearSelection()
    } else {
      const startNode = range?.startContainer
      const endNode = range?.endContainer
      const startIndex = (range?.startOffset || 0) + getNodeIndex(startNode as Node)
      const endIndex = (range?.endOffset || 0) + getNodeIndex(endNode as Node)
      const start = Math.min(startIndex, endIndex)
      const end = Math.max(startIndex, endIndex) - 1
      const textRect = range?.getBoundingClientRect()
      const popoverTop = textRect?.top || 0
      const popoverLeft = (textRect?.x || 0) + (textRect?.width || 0) / 2
      setShowPopover(true)
      setAxis({ y: popoverTop - 94 - window.scrollY, x: popoverLeft })
      setSelectedText(text)
      setTextRange({
        from: start,
        to: end,
      })
    }
  }

  function getNodeIndex(node: Node): number {
    let index = 0
    while ((node = node.previousSibling as Node)) {
      index += (node.textContent || '').length
    }
    return index
  }

  const clearSelection = () => {
    const selection = window.getSelection()
    if ((selection?.rangeCount || 0) > 0) {
      selection?.removeAllRanges()
    }
  }

  return {
    highlight,
    showPopover,
    selectedText,
    axis,
    textRange,
    clearSelection,
    onMouseUp,
  }
}
