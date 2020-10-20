import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const CardPlusOutlineIcon: FC<IconInterface> = function CardPlusOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CardPlusOutlineIcon ${className}`;
      return (
        <Icon alt="CardPlusOutline" className={classNames} {...propsRest}>
          <path d="M21 15V18H24V20H21V23H19V20H16V18H19V15H21M14 18H3V6H19V13H21V6C21 4.89 20.11 4 19 4H3C1.9 4 1 4.89 1 6V18C1 19.11 1.9 20 3 20H14V18Z" />

        </Icon>
      );
    };
    CardPlusOutlineIcon.displayName = 'CardPlusOutlineIcon';
      