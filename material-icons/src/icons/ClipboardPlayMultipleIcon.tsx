import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ClipboardPlayMultipleIcon: FC<IconInterface> = function ClipboardPlayMultipleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ClipboardPlayMultipleIcon ${className}`;
      return (
        <Icon alt="ClipboardPlayMultiple" className={classNames} {...propsRest}>
          <path d="M4 21H18V23H4C2.9 23 2 22.1 2 21V7H4M22 5V17C22 18.1 21.1 19 20 19H8C6.9 19 6 18.1 6 17V5C6 3.9 6.9 3 8 3H11.2C11.6 1.8 12.7 1 14 1C15.3 1 16.4 1.8 16.8 3H20C21.1 3 22 3.9 22 5M13 4C13 4.5 13.5 5 14 5C14.5 5 15 4.5 15 4C15 3.5 14.6 3 14 3C13.4 3 13 3.5 13 4M17 12L12 8V16" />

        </Icon>
      );
    };
    ClipboardPlayMultipleIcon.displayName = 'ClipboardPlayMultipleIcon';
      