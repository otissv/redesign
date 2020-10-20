import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const DeleteSweepIcon: FC<IconInterface> = function DeleteSweepIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `DeleteSweepIcon ${className}`;
      return (
        <Icon alt="DeleteSweep" className={classNames} {...propsRest}>
          <path d="M15,16H19V18H15V16M15,8H22V10H15V8M15,12H21V14H15V12M3,18A2,2 0 0,0 5,20H11A2,2 0 0,0 13,18V8H3V18M14,5H11L10,4H6L5,5H2V7H14V5Z" />

        </Icon>
      );
    };
    DeleteSweepIcon.displayName = 'DeleteSweepIcon';
      