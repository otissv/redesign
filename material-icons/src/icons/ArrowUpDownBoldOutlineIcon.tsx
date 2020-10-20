import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ArrowUpDownBoldOutlineIcon: FC<IconInterface> = function ArrowUpDownBoldOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowUpDownBoldOutlineIcon ${className}`;
      return (
        <Icon alt="ArrowUpDownBoldOutline" className={classNames} {...propsRest}>
          <path d="M16,10H22L12,0L2,10H8V14H2L12,24L22,14H16V10M14,16H17L12,21L7,16H10V8H7L12,3L17,8H14V16Z" />

        </Icon>
      );
    };
    ArrowUpDownBoldOutlineIcon.displayName = 'ArrowUpDownBoldOutlineIcon';
      