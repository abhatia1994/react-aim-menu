import { MutableRefObject } from 'react';
/**
 * Credit to material-ui for this snippet
 */
declare type HTMLElementOrNull = HTMLElement | null;
declare type CallbackRef = (node: HTMLElementOrNull) => any;
declare type AnyRef = CallbackRef | MutableRefObject<HTMLElementOrNull>;
/**
 * useForkRef
 * Joins refs together and returns a combination of the two as a new ref
 *
 * @param refA
 * @param refB
 */
declare function useForkRef(refA: AnyRef, refB: AnyRef): CallbackRef | null;
export { useForkRef };
