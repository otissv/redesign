import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const IslamIcon: FC<IconInterface> = function IslamIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `IslamIcon ${className}`;
      return (
        <Icon alt="Islam" className={classNames} {...propsRest}>
          <path d="M12.3,2C12.2,2 12.1,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22C15,22 16.7,21 18.5,19.5C13,21 8,17 8,12C8,7 13,3 18.5,4.5C16.86,2.86 14.62,1.96 12.3,2M16.8,6.2L15.3,9.7L11.6,10L14.5,12.5L13.6,16L16.8,14L20,16L19,12.5L22,10L18.3,9.7L16.8,6.2Z" />

        </Icon>
      );
    };
    IslamIcon.displayName = 'IslamIcon';
      