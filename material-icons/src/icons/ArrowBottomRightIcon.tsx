import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ArrowBottomRightIcon: FC<IconInterface> = function ArrowBottomRightIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowBottomRightIcon ${className}`;
      return (
        <Icon alt="ArrowBottomRight" className={classNames} {...propsRest}>
          <path d="M5,6.41L6.41,5L17,15.59V9H19V19H9V17H15.59L5,6.41Z" />

        </Icon>
      );
    };
    ArrowBottomRightIcon.displayName = 'ArrowBottomRightIcon';
      