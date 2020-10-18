import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const MusicAccidentalNaturalIcon: FC<IconInterface> = function MusicAccidentalNaturalIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MusicAccidentalNaturalIcon ${className}`;
      return (
        <Icon alt="MusicAccidentalNatural" className={classNames} {...propsRest}>
          <path d="M10 8.75V3.5H8V17.5L14 15.25V20.5H16V6.5L10 8.75M14 13.25L10 14.75V10.75L14 9.25V13.25Z" />

        </Icon>
      );
    };
    MusicAccidentalNaturalIcon.displayName = 'MusicAccidentalNaturalIcon';
      