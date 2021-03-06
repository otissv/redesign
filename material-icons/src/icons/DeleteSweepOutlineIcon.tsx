import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const DeleteSweepOutlineIcon: FC<IconInterface> = function DeleteSweepOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `DeleteSweepOutlineIcon ${className}`;
      return (
        <Icon alt="DeleteSweepOutline" className={classNames} {...propsRest}>
          <path d="M15,16H19V18H15V16M15,8H22V10H15V8M15,12H21V14H15V12M11,10V18H5V10H11M13,8H3V18A2,2 0 0,0 5,20H11A2,2 0 0,0 13,18V8M14,5H11L10,4H6L5,5H2V7H14V5Z" />

        </Icon>
      );
    };
    DeleteSweepOutlineIcon.displayName = 'DeleteSweepOutlineIcon';
      