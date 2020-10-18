import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const PackageIcon: FC<IconInterface> = function PackageIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PackageIcon ${className}`;
      return (
        <Icon alt="Package" className={classNames} {...propsRest}>
          <path d="M5.12,5H18.87L17.93,4H5.93L5.12,5M20.54,5.23C20.83,5.57 21,6 21,6.5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V6.5C3,6 3.17,5.57 3.46,5.23L4.84,3.55C5.12,3.21 5.53,3 6,3H18C18.47,3 18.88,3.21 19.15,3.55L20.54,5.23M6,18H12V15H6V18Z" />

        </Icon>
      );
    };
    PackageIcon.displayName = 'PackageIcon';
      