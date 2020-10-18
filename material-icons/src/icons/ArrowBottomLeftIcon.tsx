import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ArrowBottomLeftIcon: FC<IconInterface> = function ArrowBottomLeftIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowBottomLeftIcon ${className}`;
      return (
        <Icon alt="ArrowBottomLeft" className={classNames} {...propsRest}>
          <path d="M19,6.41L17.59,5L7,15.59V9H5V19H15V17H8.41L19,6.41Z" />

        </Icon>
      );
    };
    ArrowBottomLeftIcon.displayName = 'ArrowBottomLeftIcon';
      