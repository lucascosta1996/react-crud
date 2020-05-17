import React, { memo } from 'react';

function Dragon ( { dragon } ) {
  return (
    <li key={ `${dragon.name}` }>
      <section>
        <div className='infos'>
          <span className='title'>{ dragon.name }</span>
          <span className='type'>{ dragon.type }</span>
          <span className='date'>{ dragon.createdAt }</span>
        </div>
      </section>
    </li>
  );
}

export default memo( Dragon );
