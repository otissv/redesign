import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const WeightPoundIcon: FC<IconInterface> = function WeightPoundIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `WeightPoundIcon ${className}`;
      return (
        <Icon alt="WeightPound" className={classNames} {...propsRest}>
          <path d="M12,3A4,4 0 0,1 16,7C16,7.73 15.81,8.41 15.46,9H18C18.95,9 19.75,9.67 19.95,10.56C21.96,18.57 22,18.78 22,19A2,2 0 0,1 20,21H4A2,2 0 0,1 2,19C2,18.78 2.04,18.57 4.05,10.56C4.25,9.67 5.05,9 6,9H8.54C8.19,8.41 8,7.73 8,7A4,4 0 0,1 12,3M12,5A2,2 0 0,0 10,7A2,2 0 0,0 12,9A2,2 0 0,0 14,7A2,2 0 0,0 12,5M6,11V19H11V17H8V11H6M13,11V19H16C17.11,19 18,18.11 18,17V16.5C18,15.93 17.75,15.38 17.32,15C17.75,14.62 18,14.07 18,13.5V13C18,11.89 17.11,11 16,11H13M15,13H16V14H15V13M15,16H16V17H15V16Z" />

        </Icon>
      );
    };
    WeightPoundIcon.displayName = 'WeightPoundIcon';
      