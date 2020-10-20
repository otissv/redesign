import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const GraveStoneIcon: FC<IconInterface> = function GraveStoneIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `GraveStoneIcon ${className}`;
      return (
        <Icon alt="GraveStone" className={classNames} {...propsRest}>
          <path d="M10,2H14C17.31,2 19,4.69 19,8V18.66C16.88,17.63 15.07,17 12,17C8.93,17 7.12,17.63 5,18.66V8C5,4.69 6.69,2 10,2M8,8V9.5H16V8H8M9,12V13.5H15V12H9M3,22V21.31C5.66,19.62 13.23,15.84 21,21.25V22H3Z" />

        </Icon>
      );
    };
    GraveStoneIcon.displayName = 'GraveStoneIcon';
      