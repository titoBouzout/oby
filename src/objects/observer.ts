
/* IMPORT */

import {DIRTY_NO, DIRTY_MAYBE_NO, DIRTY_MAYBE_YES, DIRTY_YES} from '~/constants';
import {OWNER} from '~/context';
import Owner from '~/objects/owner';
import {is} from '~/utils';
import type {IObservable, IOwner} from '~/types';

/* MAIN */

//TODO: lazy

class Observer extends Owner {

  /* VARIABLES */

  parent: IOwner = OWNER;
  observables: Set<IObservable>;
  status: 0 | 1 | 2 | 3;

  /* CONSTRUCTOR */

  constructor () {

    super ();

    this.observables = new Set ();
    this.status = DIRTY_YES;

    this.parent.observers.push ( this );

  }

  /* API */

  dispose (): void {

    this.observables.forEach ( observable => observable.observers.delete ( this ) );

    this.observables.clear ();

    super.dispose ();

  }

  link ( observable: IObservable<any> ): void {

    this.observables.add ( observable );

    observable.observers.add ( this );

  }

  run (): void {

    throw new Error ( 'Abstract method' );

  }

  stale ( status: 2 | 3 ): void {

    this.status = status;

  }

  update (): void {

    if ( is ( this.status, DIRTY_MAYBE_YES ) ) { //TSC: We don't want the type narrowed here

      for ( const observable of this.observables ) {

        observable.parent?.update ();

        if ( this.status === DIRTY_YES ) break;

      }

    }

    if ( this.status === DIRTY_YES ) {

      this.status = DIRTY_MAYBE_NO;

      this.run ();

      if ( this.status === DIRTY_MAYBE_NO ) {

        this.status = DIRTY_NO;

      } else {

        this.run ();

      }

    } else {

      this.status = DIRTY_NO;

    }

  }

}

/* EXPORT */

export default Observer;

//TODO: REVIEW
