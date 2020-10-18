import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const PacManIcon: FC<IconInterface> = function PacManIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PacManIcon ${className}`;
      return (
        <Icon alt="PacMan" className={classNames} {...propsRest}>
          <path d="M12,12L19.07,19.07C15.17,23 8.83,23 4.93,19.07C1,15.17 1,8.84 4.93,4.93C8.83,1 15.16,1 19.07,4.93L12,12M19,10A2,2 0 0,0 17,12A2,2 0 0,0 19,14A2,2 0 0,0 21,12A2,2 0 0,0 19,10Z" />

        </Icon>
      );
    };
    PacManIcon.displayName = 'PacManIcon';
      