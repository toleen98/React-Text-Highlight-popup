import React from 'react'
import { useHighlightedTextHook } from '../hooks/useHighlightedTextHook'
import { HighlightText } from './HighlightTextComponent'
import './App.css'

interface Range {
  from: number
  to: number
}
interface props {
  text: string
  Range: Range[]
  popupActions?: {
    label: string
    action: (selectedText: string, textRange: Range) => void
  }[]
  highlighedTextClass?: string
  popupClass?: string
}

const HighlightedText = (props: props) => {
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
            props.popupActions.map((item) => (
              <button onClick={() => item.action(selectedText, textRange)}>{item.label}</button>
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
