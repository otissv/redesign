import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const EmoticonConfusedIcon: FC<IconInterface> = function EmoticonConfusedIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `EmoticonConfusedIcon ${className}`;
      return (
        <Icon alt="EmoticonConfused" className={classNames} {...propsRest}>
          <path d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2M8.5 8A1.5 1.5 0 1 1 7 9.5A1.54 1.54 0 0 1 8.5 8M17 16H13A4 4 0 0 0 9.53 18L7.8 17A6 6 0 0 1 13 14H17M15.5 11A1.5 1.5 0 1 1 17 9.5A1.54 1.54 0 0 1 15.5 11Z" />

        </Icon>
      );
    };
    EmoticonConfusedIcon.displayName = 'EmoticonConfusedIcon';
      