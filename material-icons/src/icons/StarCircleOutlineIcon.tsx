import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const StarCircleOutlineIcon: FC<IconInterface> = function StarCircleOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `StarCircleOutlineIcon ${className}`;
      return (
        <Icon alt="StarCircleOutline" className={classNames} {...propsRest}>
          <path d="M8.58,17.25L9.5,13.36L6.5,10.78L10.45,10.41L12,6.8L13.55,10.45L17.5,10.78L14.5,13.36L15.42,17.25L12,15.19L8.58,17.25M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />

        </Icon>
      );
    };
    StarCircleOutlineIcon.displayName = 'StarCircleOutlineIcon';
      