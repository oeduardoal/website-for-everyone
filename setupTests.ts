/* eslint-disable @typescript-eslint/ban-ts-comment */
import '@testing-library/jest-dom'
global.ResizeObserver = require('resize-observer-polyfill')

global.DOMRect = {
  // @ts-ignore
  fromRect: () => ({
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: 0,
    height: 0,
  }),
}
