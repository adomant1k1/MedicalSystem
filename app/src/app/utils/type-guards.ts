export const isUndefined = (obj: any): obj is undefined =>
    typeof obj === 'undefined';

export const isNil = (val: any): val is null | undefined =>
    isUndefined(val) || val === null;

export const isDefined = <T>(val: T | null | undefined): val is T =>
    !isNil(val);