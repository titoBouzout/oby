
/* MAIN */

const castError = ( error: unknown ): Error => {

  if ( error instanceof Error ) return error;

  if ( typeof error === 'string' ) return new Error ( error );

  return new Error ( 'Unknown error' );

};

const isFunction = ( value: unknown ): value is (( ...args: unknown[] ) => unknown) => {

  return typeof value === 'function';

};

const max = <T extends number, U extends number> ( a: T, b: U ): T | U => {

  return Math.max ( a, b ) as T | U; //TSC

};

/* EXPORT */

export {castError, isFunction, max};
