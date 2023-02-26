import React from 'react'

interface Range {
  from: number
  to: number
}

function removeIncludedRanges(ranges: Range[]): Range[] {
  // Sort the ranges by start value
  const newRanges = [...ranges].sort((a, b) => a.from - b.from)

  // Iterate over the sorted ranges, removing any included ranges
  for (let i = 0; i < newRanges.length - 1; i++) {
    if (newRanges[i].to >= newRanges[i + 1].to) {
      // The current range includes the next range
      newRanges.splice(i + 1, 1)
      i-- // Check the current range again in case it includes the next-next range
    } else if (newRanges[i].to >= newRanges[i + 1].from) {
      // The current range overlaps with the next range
      newRanges[i].to = newRanges[i + 1].to // Merge the newRanges
      newRanges.splice(i + 1, 1)
      i-- // Check the current range again in case it includes the next-next range
    }
  }

  return newRanges
}

export const HighlightText = (text: string, ranges: Range[], highlighedTextClass?: string) => {
  const newRanges = removeIncludedRanges(ranges)
  const returnText: (string | JSX.Element)[] = []

  if (newRanges.length === 0) {
    return text
  }

  let currentStart = 0
  for (let i = 0; i < newRanges.length; i++) {
    const currentRange = newRanges[i]
    const beforeText = text.slice(currentStart, currentRange.from)
    const highlightedText = text.slice(currentRange.from, currentRange.to)
    returnText.push(beforeText)
    returnText.push(
      <span
        onClick={(e) => {
          e.stopPropagation()
        }}
        className={highlighedTextClass || 'highlight'}
      >
        {highlightedText}
      </span>,
    )
    currentStart = currentRange.to
  }
  const afterText = text.slice(currentStart, text.length)
  returnText.push(afterText)

  return returnText.map((t, i) => <React.Fragment key={i}>{t}</React.Fragment>)
}
