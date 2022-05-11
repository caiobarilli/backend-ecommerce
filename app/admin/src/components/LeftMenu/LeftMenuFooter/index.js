import React from 'react';
import Wrapper, { A } from './Wrapper';

function LeftMenuFooter() {
   return (
        <Wrapper>
            <div className="poweredBy">
                <A key="website" href="h#" target="_blank" rel="noopener noreferrer">
                    WonGames
                </A>
            </div>
        </Wrapper>
   );
}

export default LeftMenuFooter;
