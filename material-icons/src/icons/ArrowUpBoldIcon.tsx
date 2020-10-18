import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ArrowUpBoldIcon: FC<IconInterface> = function ArrowUpBoldIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrowUpBoldIcon ${className}`;
      return (
        <Icon alt="ArrowUpBold" className={classNames} {...propsRest}>
          <path d="M15,20H9V12H4.16L12,4.16L19.84,12H15V20Z" />

        </Icon>
      );
    };
    ArrowUpBoldIcon.displayName = 'ArrowUpBoldIcon';
      