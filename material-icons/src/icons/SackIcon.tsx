import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const SackIcon: FC<IconInterface> = function SackIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SackIcon ${className}`;
      return (
        <Icon alt="Sack" className={classNames} {...propsRest}>
          <path d="M16,9C20,11 21,18 21,18C21,18 22,22 16,22C10,22 8,22 8,22C2,22 3,18 3,18C3,18 4,11 8,9M14,4L12,2L10,4L6,2L8,7H16L18,2L14,4Z" />

        </Icon>
      );
    };
    SackIcon.displayName = 'SackIcon';
      