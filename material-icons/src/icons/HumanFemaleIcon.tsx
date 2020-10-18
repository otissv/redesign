import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const HumanFemaleIcon: FC<IconInterface> = function HumanFemaleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `HumanFemaleIcon ${className}`;
      return (
        <Icon alt="HumanFemale" className={classNames} {...propsRest}>
          <path d="M12,2A2,2 0 0,1 14,4A2,2 0 0,1 12,6A2,2 0 0,1 10,4A2,2 0 0,1 12,2M10.5,22V16H7.5L10.09,8.41C10.34,7.59 11.1,7 12,7C12.9,7 13.66,7.59 13.91,8.41L16.5,16H13.5V22H10.5Z" />

        </Icon>
      );
    };
    HumanFemaleIcon.displayName = 'HumanFemaleIcon';
      