import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const BellSleepOutlineIcon: FC<IconInterface> = function BellSleepOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BellSleepOutlineIcon ${className}`;
      return (
        <Icon alt="BellSleepOutline" className={classNames} {...propsRest}>
          <path d="M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M9,9V11H12.24L9,13.7V16H15V14H11.76L15,11.3V9H9Z" />

        </Icon>
      );
    };
    BellSleepOutlineIcon.displayName = 'BellSleepOutlineIcon';
      