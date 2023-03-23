
/* IMPORT */

import Reaction from '~/objects/reaction';
import type {DisposeFunction, ReactionFunction} from '~/types';

/* MAIN */

const reaction = ( fn: ReactionFunction ): DisposeFunction => {

  const reaction = new Reaction ( fn );
  const dispose = reaction.dispose.bind ( reaction, true, true );

  return dispose;

};

/* EXPORT */

export default reaction;