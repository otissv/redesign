import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const DeleteIcon: FC<IconInterface> = function DeleteIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `DeleteIcon ${className}`;
      return (
        <Icon alt="Delete" className={classNames} {...propsRest}>
          <path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />

        </Icon>
      );
    };
    DeleteIcon.displayName = 'DeleteIcon';
      