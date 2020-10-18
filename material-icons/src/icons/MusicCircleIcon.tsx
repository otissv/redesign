import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const MusicCircleIcon: FC<IconInterface> = function MusicCircleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MusicCircleIcon ${className}`;
      return (
        <Icon alt="MusicCircle" className={classNames} {...propsRest}>
          <path d="M16,9V7H12V12.5C11.58,12.19 11.07,12 10.5,12A2.5,2.5 0 0,0 8,14.5A2.5,2.5 0 0,0 10.5,17A2.5,2.5 0 0,0 13,14.5V9H16M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z" />

        </Icon>
      );
    };
    MusicCircleIcon.displayName = 'MusicCircleIcon';
      