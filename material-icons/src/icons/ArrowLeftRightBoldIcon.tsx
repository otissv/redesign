import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ArrowLeftRightBoldIcon: FC<IconInterface> = function ArrowLeftRightBoldIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowLeftRightBoldIcon ${className}`;
      return (
        <Icon alt="ArrowLeftRightBold" className={classNames} {...propsRest}>
          <path d="M8,14V18L2,12L8,6V10H16V6L22,12L16,18V14H8Z" />

        </Icon>
      );
    };
    ArrowLeftRightBoldIcon.displayName = 'ArrowLeftRightBoldIcon';
      