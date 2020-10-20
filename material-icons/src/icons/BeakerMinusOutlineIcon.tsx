import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const BeakerMinusOutlineIcon: FC<IconInterface> = function BeakerMinusOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BeakerMinusOutlineIcon ${className}`;
      return (
        <Icon alt="BeakerMinusOutline" className={classNames} {...propsRest}>
          <path d="M23 17V19H15V17H23M3 3H21V5C19.9 5 19 5.9 19 7V15H17V5H7V7H12V8H7V9H10V10H7V11H10V12H7V13H12V14H7V15H10V16H7V19H13.08C13.2 19.72 13.45 20.39 13.8 21H7C5.9 21 5 20.11 5 19V7C5 5.9 4.11 5 3 5V3Z" />

        </Icon>
      );
    };
    BeakerMinusOutlineIcon.displayName = 'BeakerMinusOutlineIcon';
      