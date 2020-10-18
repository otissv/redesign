import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ArrowDownBoldOutlineIcon: FC<IconInterface> = function ArrowDownBoldOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowDownBoldOutlineIcon ${className}`;
      return (
        <Icon alt="ArrowDownBoldOutline" className={classNames} {...propsRest}>
          <path d="M22,11L12,21L2,11H8V3H16V11H22M12,18L17,13H14V5H10V13H7L12,18Z" />

        </Icon>
      );
    };
    ArrowDownBoldOutlineIcon.displayName = 'ArrowDownBoldOutlineIcon';
      