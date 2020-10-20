import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const PackageUpIcon: FC<IconInterface> = function PackageUpIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PackageUpIcon ${className}`;
      return (
        <Icon alt="PackageUp" className={classNames} {...propsRest}>
          <path d="M20.54,5.23C20.83,5.57 21,6 21,6.5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V6.5C3,6 3.17,5.57 3.46,5.23L4.84,3.55C5.12,3.21 5.53,3 6,3H18C18.47,3 18.88,3.21 19.15,3.55L20.54,5.23M5.12,5H18.87L17.93,4H5.93L5.12,5M12,9.5L6.5,15H10V17H14V15H17.5L12,9.5Z" />

        </Icon>
      );
    };
    PackageUpIcon.displayName = 'PackageUpIcon';
      