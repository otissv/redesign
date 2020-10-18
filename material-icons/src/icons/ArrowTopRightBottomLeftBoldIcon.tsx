import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ArrowTopRightBottomLeftBoldIcon: FC<IconInterface> = function ArrowTopRightBottomLeftBoldIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowTopRightBottomLeftBoldIcon ${className}`;
      return (
        <Icon alt="ArrowTopRightBottomLeftBold" className={classNames} {...propsRest}>
          <path d="M18.17,8.66L21,11.5V3H12.5L15.34,5.83L5.83,15.34L3,12.5V21H11.5L8.66,18.17L18.17,8.66Z" />

        </Icon>
      );
    };
    ArrowTopRightBottomLeftBoldIcon.displayName = 'ArrowTopRightBottomLeftBoldIcon';
      