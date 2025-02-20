/**
 * Error types that can be thrown by the punycode implementation
 */
export type PunycodeErrorType = 'overflow' | 'not-basic' | 'invalid-input'

/**
 * Error messages for each error type
 */
export const PUNYCODE_ERRORS: Record<PunycodeErrorType, string> = {
  'overflow': 'Overflow: input needs wider integers to process',
  'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
  'invalid-input': 'Invalid input',
}

/**
 * A callback function type for array mapping operations
 */
export type MapCallback<T, R> = (value: T, index: number, array: T[]) => R

/**
 * A callback function type for domain mapping operations
 */
export type DomainCallback = (string: string) => string

/**
 * Configuration interface for the punycode module
 */
export interface PunycodeConfig {
  version: string
  ucs2: {
    decode: (string: string) => number[]
    encode: (codePoints: number[]) => string
  }
  decode: (input: string) => string
  encode: (input: string) => string
  toASCII: (input: string) => string
  toUnicode: (input: string) => string
}
