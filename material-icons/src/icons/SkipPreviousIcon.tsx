import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const SkipPreviousIcon: FC<IconInterface> = function SkipPreviousIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SkipPreviousIcon ${className}`;
      return (
        <Icon alt="SkipPrevious" className={classNames} {...propsRest}>
          <path d="M6,18V6H8V18H6M9.5,12L18,6V18L9.5,12Z" />

        </Icon>
      );
    };
    SkipPreviousIcon.displayName = 'SkipPreviousIcon';
      