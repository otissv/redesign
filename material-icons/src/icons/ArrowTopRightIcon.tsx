import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ArrowTopRightIcon: FC<IconInterface> = function ArrowTopRightIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowTopRightIcon ${className}`;
      return (
        <Icon alt="ArrowTopRight" className={classNames} {...propsRest}>
          <path d="M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z" />

        </Icon>
      );
    };
    ArrowTopRightIcon.displayName = 'ArrowTopRightIcon';
      