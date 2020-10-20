import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const EmoticonConfusedOutlineIcon: FC<IconInterface> = function EmoticonConfusedOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `EmoticonConfusedOutlineIcon ${className}`;
      return (
        <Icon alt="EmoticonConfusedOutline" className={classNames} {...propsRest}>
          <path d="M20 12A8 8 0 1 0 12 20A8 8 0 0 0 20 12M22 12A10 10 0 1 1 12 2A10 10 0 0 1 22 12M15.5 8A1.5 1.5 0 1 1 14 9.5A1.54 1.54 0 0 1 15.5 8M10 9.5A1.5 1.5 0 1 1 8.5 8A1.54 1.54 0 0 1 10 9.5M17 15H13A4 4 0 0 0 9.53 17L7.8 16A6 6 0 0 1 13 13H17Z" />

        </Icon>
      );
    };
    EmoticonConfusedOutlineIcon.displayName = 'EmoticonConfusedOutlineIcon';
      