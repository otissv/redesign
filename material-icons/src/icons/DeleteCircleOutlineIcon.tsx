import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const DeleteCircleOutlineIcon: FC<IconInterface> = function DeleteCircleOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `DeleteCircleOutlineIcon ${className}`;
      return (
        <Icon alt="DeleteCircleOutline" className={classNames} {...propsRest}>
          <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M16,10V17A1,1 0 0,1 15,18H9A1,1 0 0,1 8,17V10H16M13.5,6L14.5,7H17V9H7V7H9.5L10.5,6H13.5Z" />

        </Icon>
      );
    };
    DeleteCircleOutlineIcon.displayName = 'DeleteCircleOutlineIcon';
      