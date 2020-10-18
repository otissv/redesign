import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const RelativeScaleIcon: FC<IconInterface> = function RelativeScaleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `RelativeScaleIcon ${className}`;
      return (
        <Icon alt="RelativeScale" className={classNames} {...propsRest}>
          <path d="M20,18H4V6H20M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4M12,10H10V12H12M8,10H6V12H8M16,14H14V16H16M16,10H14V12H16V10Z" />

        </Icon>
      );
    };
    RelativeScaleIcon.displayName = 'RelativeScaleIcon';
      