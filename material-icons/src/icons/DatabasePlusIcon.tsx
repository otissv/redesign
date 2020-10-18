import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const DatabasePlusIcon: FC<IconInterface> = function DatabasePlusIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `DatabasePlusIcon ${className}`;
      return (
        <Icon alt="DatabasePlus" className={classNames} {...propsRest}>
          <path d="M18,14H20V17H23V19H20V22H18V19H15V17H18V14M12,3C16.42,3 20,4.79 20,7C20,9.21 16.42,11 12,11C7.58,11 4,9.21 4,7C4,4.79 7.58,3 12,3M4,9C4,11.21 7.58,13 12,13C16.42,13 20,11.21 20,9V9L20,12.08L19,12C16.41,12 14.2,13.64 13.36,15.94L12,16C7.58,16 4,14.21 4,12V9M4,14C4,16.21 7.58,18 12,18H13C13,19.05 13.27,20.04 13.75,20.9L12,21C7.58,21 4,19.21 4,17V14Z" />

        </Icon>
      );
    };
    DatabasePlusIcon.displayName = 'DatabasePlusIcon';
      