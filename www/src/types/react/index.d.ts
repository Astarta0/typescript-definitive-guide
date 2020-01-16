import { DOMAttributes } from "react";
import { AriaAttributes } from "react";

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    state?: string;
    toggle?: boolean;
    filter?: string;
    ['toggle-state']?: string;
    [`is-match`]?: string;
    [`is-collapse`]?: string;
    [`item-index`]?: number;
  }
}