import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const BowlMixOutlineIcon: FC<IconInterface> = function BowlMixOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BowlMixOutlineIcon ${className}`;
      return (
        <Icon alt="BowlMixOutline" className={classNames} {...propsRest}>
          <path d="M15.6 12H2V15C2 18.9 5.1 22 9 22H15C18.9 22 22 18.9 22 15V12H15.6M20 15C20 17.8 17.8 20 15 20H9C6.2 20 4 17.8 4 15V14H20V15M16.2 11L20.3 4.4L22 5.5L18.6 11H16.2Z" />

        </Icon>
      );
    };
    BowlMixOutlineIcon.displayName = 'BowlMixOutlineIcon';
      