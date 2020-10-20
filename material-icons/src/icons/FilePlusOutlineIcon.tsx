import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FilePlusOutlineIcon: FC<IconInterface> = function FilePlusOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FilePlusOutlineIcon ${className}`;
      return (
        <Icon alt="FilePlusOutline" className={classNames} {...propsRest}>
          <path d="M12,14V11H10V14H7V16H10V19H12V16H15V14M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18" />

        </Icon>
      );
    };
    FilePlusOutlineIcon.displayName = 'FilePlusOutlineIcon';
      