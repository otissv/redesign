import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const KeyStarIcon: FC<IconInterface> = function KeyStarIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `KeyStarIcon ${className}`;
      return (
        <Icon alt="KeyStar" className={classNames} {...propsRest}>
          <path d="M6.5 3C4 3 2 5 2 7.5S4 12 6.5 12C8.46 12 10.13 10.75 10.74 9H15V12H18V9H22V6H10.74C10.13 4.25 8.46 3 6.5 3M6.5 6C7.33 6 8 6.67 8 7.5S7.33 9 6.5 9 5 8.33 5 7.5 5.67 6 6.5 6M12 14L10.87 16.64L8 16.89L10.18 18.77L9.5 21.58L12 20.09L14.45 21.58L13.8 18.77L16 16.89L13.11 16.64Z" />

        </Icon>
      );
    };
    KeyStarIcon.displayName = 'KeyStarIcon';
      