import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const BottleTonicIcon: FC<IconInterface> = function BottleTonicIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BottleTonicIcon ${className}`;
      return (
        <Icon alt="BottleTonic" className={classNames} {...propsRest}>
          <path d="M13 4H11L10 2H14L13 4M19 13V22H5V13C5 10.24 7.24 8 10 8V6H9V5H15V6H14V8C16.76 8 19 10.24 19 13Z" />

        </Icon>
      );
    };
    BottleTonicIcon.displayName = 'BottleTonicIcon';
      