import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const WeightKilogramIcon: FC<IconInterface> = function WeightKilogramIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `WeightKilogramIcon ${className}`;
      return (
        <Icon alt="WeightKilogram" className={classNames} {...propsRest}>
          <path d="M12,3A4,4 0 0,1 16,7C16,7.73 15.81,8.41 15.46,9H18C18.95,9 19.75,9.67 19.95,10.56C21.96,18.57 22,18.78 22,19A2,2 0 0,1 20,21H4A2,2 0 0,1 2,19C2,18.78 2.04,18.57 4.05,10.56C4.25,9.67 5.05,9 6,9H8.54C8.19,8.41 8,7.73 8,7A4,4 0 0,1 12,3M12,5A2,2 0 0,0 10,7A2,2 0 0,0 12,9A2,2 0 0,0 14,7A2,2 0 0,0 12,5M6,11V19H8V16.5L9,17.5V19H11V17L9,15L11,13V11H9V12.5L8,13.5V11H6M15,11C13.89,11 13,11.89 13,13V17C13,18.11 13.89,19 15,19H18V14H16V17H15V13H18V11H15Z" />

        </Icon>
      );
    };
    WeightKilogramIcon.displayName = 'WeightKilogramIcon';
      