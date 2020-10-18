import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const HumanMaleIcon: FC<IconInterface> = function HumanMaleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `HumanMaleIcon ${className}`;
      return (
        <Icon alt="HumanMale" className={classNames} {...propsRest}>
          <path d="M12,2A2,2 0 0,1 14,4A2,2 0 0,1 12,6A2,2 0 0,1 10,4A2,2 0 0,1 12,2M10.5,7H13.5A2,2 0 0,1 15.5,9V14.5H14V22H10V14.5H8.5V9A2,2 0 0,1 10.5,7Z" />

        </Icon>
      );
    };
    HumanMaleIcon.displayName = 'HumanMaleIcon';
      