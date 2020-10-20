import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const DeleteOutlineIcon: FC<IconInterface> = function DeleteOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `DeleteOutlineIcon ${className}`;
      return (
        <Icon alt="DeleteOutline" className={classNames} {...propsRest}>
          <path d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" />

        </Icon>
      );
    };
    DeleteOutlineIcon.displayName = 'DeleteOutlineIcon';
      