import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const PercentIcon: FC<IconInterface> = function PercentIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PercentIcon ${className}`;
      return (
        <Icon alt="Percent" className={classNames} {...propsRest}>
          <path d="M18.5,3.5L3.5,18.5L5.5,20.5L20.5,5.5M7,4A3,3 0 0,0 4,7A3,3 0 0,0 7,10A3,3 0 0,0 10,7A3,3 0 0,0 7,4M17,14A3,3 0 0,0 14,17A3,3 0 0,0 17,20A3,3 0 0,0 20,17A3,3 0 0,0 17,14Z" />

        </Icon>
      );
    };
    PercentIcon.displayName = 'PercentIcon';
      