import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const BottleSodaOutlineIcon: FC<IconInterface> = function BottleSodaOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BottleSodaOutlineIcon ${className}`;
      return (
        <Icon alt="BottleSodaOutline" className={classNames} {...propsRest}>
          <path d="M14.4 9.58C12.9 7.89 13 4 13 4H14V2H10V4H11S11.1 7.89 9.6 9.58A2 2 0 0 0 9 11V20A2 2 0 0 0 11 22H13A2 2 0 0 0 15 20V11A2 2 0 0 0 14.4 9.58M13 20H11V11L11.1 10.91A6.26 6.26 0 0 0 12 9.5A6.26 6.26 0 0 0 12.9 10.91L13 11Z" />

        </Icon>
      );
    };
    BottleSodaOutlineIcon.displayName = 'BottleSodaOutlineIcon';
      