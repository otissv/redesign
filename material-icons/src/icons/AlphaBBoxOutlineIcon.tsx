import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const AlphaBBoxOutlineIcon: FC<IconInterface> = function AlphaBBoxOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaBBoxOutlineIcon ${className}`;
      return (
        <Icon alt="AlphaBBoxOutline" className={classNames} {...propsRest}>
          <path d="M15,10.5C15,11.3 14.3,12 13.5,12C14.3,12 15,12.7 15,13.5V15A2,2 0 0,1 13,17H9V7H13A2,2 0 0,1 15,9V10.5M13,15V13H11V15H13M13,11V9H11V11H13M3,5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5M5,5V19H19V5H5Z" />

        </Icon>
      );
    };
    AlphaBBoxOutlineIcon.displayName = 'AlphaBBoxOutlineIcon';
      