import React from 'react'
import { useHighlightedTextHook } from '../hooks/useHighlightedTextHook'
import { HighlightText } from './HighlightTextComponent'
import '../App.css'

export interface Range {
  from: number
  to: number
}
export interface HighlightedTextProps {
  text: string
  Range: Range[]
  popupActions?: {
    label: string
    action: (selectedText: string, textRange: Range) => void
  }[]
  highlighedTextClass?: string
  popupClass?: string
}

const HighlightedText = (props: HighlightedTextProps) => {
  const { showPopover, axis, onMouseUp, highlight, selectedText, textRange } = useHighlightedTextHook()
  return (
    <div>
      {showPopover && (
        <div
          className={props.popupClass || ' popup '}
          style={{ left: `${axis.x}px`, top: `${axis.y}px` }}
          role='presentation'
          onMouseDown={(e) => e.preventDefault()}
        >
          {props.popupActions ? (
            props.popupActions.map((item, i) => (
              <button key={item.label + i} onClick={() => item.action(selectedText, textRange)}>
                {item.label}
              </button>
            ))
          ) : (
            <div
              onClick={() => {
                console.log('clicked')
              }}
            >
              Add yours
            </div>
          )}
        </div>
      )}
      <span onMouseUp={onMouseUp} ref={highlight}>
        {HighlightText(props.text || '', props.Range || [], props.highlighedTextClass)}
      </span>
    </div>
  )
}

export default HighlightedText
