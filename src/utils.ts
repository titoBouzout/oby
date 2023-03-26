
//TODO: Review these

/* MAIN */

const castArray = <T> ( value: T[] | T ): T[] => {

  return isArray ( value ) ? value : [value];

};

const castError = ( error: unknown ): Error => {

  if ( error instanceof Error ) return error;

  if ( typeof error === 'string' ) return new Error ( error );

  return new Error ( 'Unknown error' );

};

const {is} = Object;

const {isArray} = Array;

const isEqual = ( a: unknown[], b: unknown[] ): boolean => {

  if ( a.length !== b.length ) return false;

  for ( let i = 0, l = a.length; i < l; i++ ) {

    const valueA = a[i];
    const valueB = b[i];

    if ( !is ( valueA, valueB ) ) return false;

  }

  return true;

};

const isFunction = ( value: unknown ): value is (( ...args: unknown[] ) => unknown) => {

  return typeof value === 'function';

};

const isNumber = ( value: unknown ): boolean => {

  return typeof value === 'number';

};

const isObject = ( value: unknown ): value is Record<number | string | symbol, unknown> => {

  return ( value !== null ) && ( typeof value === 'object' );

};

const max = <T extends number, U extends number> ( a: T, b: U ): T | U => {

  return ( a > b ) ? a : b;

};

const noop = (): void => {

  return;

};

const nope = (): false => {

  return false;

};

/* EXPORT */

export {castArray, castError, is, isArray, isEqual, isFunction, isNumber, isObject, max, noop, nope};

//TODO: REVIEW
