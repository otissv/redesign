import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const BottleWineIcon: FC<IconInterface> = function BottleWineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BottleWineIcon ${className}`;
      return (
        <Icon alt="BottleWine" className={classNames} {...propsRest}>
          <path d="M10,22A1,1 0 0,1 9,21V11C9,9 10,7.25 11,7V2.5A0.5,0.5 0 0,1 11.5,2H12.5A0.5,0.5 0 0,1 13,2.5V7C14,7.25 15,9 15,11V21A1,1 0 0,1 14,22H10Z" />

        </Icon>
      );
    };
    BottleWineIcon.displayName = 'BottleWineIcon';
      