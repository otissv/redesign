import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ArrowRightBoldIcon: FC<IconInterface> = function ArrowRightBoldIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowRightBoldIcon ${className}`;
      return (
        <Icon alt="ArrowRightBold" className={classNames} {...propsRest}>
          <path d="M4,15V9H12V4.16L19.84,12L12,19.84V15H4Z" />

        </Icon>
      );
    };
    ArrowRightBoldIcon.displayName = 'ArrowRightBoldIcon';
      