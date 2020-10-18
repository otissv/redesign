import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const DeleteForeverIcon: FC<IconInterface> = function DeleteForeverIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `DeleteForeverIcon ${className}`;
      return (
        <Icon alt="DeleteForever" className={classNames} {...propsRest}>
          <path d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8.46,11.88L9.87,10.47L12,12.59L14.12,10.47L15.53,11.88L13.41,14L15.53,16.12L14.12,17.53L12,15.41L9.88,17.53L8.47,16.12L10.59,14L8.46,11.88M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" />

        </Icon>
      );
    };
    DeleteForeverIcon.displayName = 'DeleteForeverIcon';
      