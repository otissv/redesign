import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const MusicRestWholeIcon: FC<IconInterface> = function MusicRestWholeIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MusicRestWholeIcon ${className}`;
      return (
        <Icon alt="MusicRestWhole" className={classNames} {...propsRest}>
          <path d="M18 10H16V14H8V10H6V9H18V10Z" />

        </Icon>
      );
    };
    MusicRestWholeIcon.displayName = 'MusicRestWholeIcon';
      