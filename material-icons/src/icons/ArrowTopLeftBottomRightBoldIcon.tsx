import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ArrowTopLeftBottomRightBoldIcon: FC<IconInterface> = function ArrowTopLeftBottomRightBoldIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowTopLeftBottomRightBoldIcon ${className}`;
      return (
        <Icon alt="ArrowTopLeftBottomRightBold" className={classNames} {...propsRest}>
          <path d="M5.83,8.66L3,11.5V3H11.5L8.66,5.83L18.17,15.34L21,12.5V21H12.5L15.34,18.17L5.83,8.66Z" />

        </Icon>
      );
    };
    ArrowTopLeftBottomRightBoldIcon.displayName = 'ArrowTopLeftBottomRightBoldIcon';
      