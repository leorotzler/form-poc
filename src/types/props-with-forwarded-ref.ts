import { ForwardedRef } from 'react';

export type PropsWithForwardedRef<T, P> = P & {
  /**
   * @deprecated Use `forwardedRef` instead.
   */
  ref?: never;

  forwardedRef?: ForwardedRef<T>;
};
