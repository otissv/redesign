import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const CardIcon: FC<IconInterface> = function CardIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CardIcon ${className}`;
      return (
        <Icon alt="Card" className={classNames} {...propsRest}>
          <path d="M20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20Z" />

        </Icon>
      );
    };
    CardIcon.displayName = 'CardIcon';
      