import React from 'react'
import { useHighlightedTextHook } from '../hooks/useHighlightedTextHook'
import { HighlightText } from './HighlightTextComponent'
import './App.css'

interface props {
  text: string
  Range: {
    from: number
    to: number
  }[]
  popupActions?: JSX.Element[]
  highlighedTextClass?: string
  popupClass?: string
}

const HighlightedText = (props: props) => {
  const { showPopover, axis, onMouseUp, highlight } = useHighlightedTextHook()
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
            props.popupActions.map((item) => item)
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
