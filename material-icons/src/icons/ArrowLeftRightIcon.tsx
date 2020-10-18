import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ArrowLeftRightIcon: FC<IconInterface> = function ArrowLeftRightIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowLeftRightIcon ${className}`;
      return (
        <Icon alt="ArrowLeftRight" className={classNames} {...propsRest}>
          <path d="M6.45,17.45L1,12L6.45,6.55L7.86,7.96L4.83,11H19.17L16.14,7.96L17.55,6.55L23,12L17.55,17.45L16.14,16.04L19.17,13H4.83L7.86,16.04L6.45,17.45Z" />

        </Icon>
      );
    };
    ArrowLeftRightIcon.displayName = 'ArrowLeftRightIcon';
      