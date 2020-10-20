import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const PowerIcon: FC<IconInterface> = function PowerIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PowerIcon ${className}`;
      return (
        <Icon alt="Power" className={classNames} {...propsRest}>
          <path d="M16.56,5.44L15.11,6.89C16.84,7.94 18,9.83 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12C6,9.83 7.16,7.94 8.88,6.88L7.44,5.44C5.36,6.88 4,9.28 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12C20,9.28 18.64,6.88 16.56,5.44M13,3H11V13H13" />

        </Icon>
      );
    };
    PowerIcon.displayName = 'PowerIcon';
      