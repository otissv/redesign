import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const AlphaJCircleOutlineIcon: FC<IconInterface> = function AlphaJCircleOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaJCircleOutlineIcon ${className}`;
      return (
        <Icon alt="AlphaJCircleOutline" className={classNames} {...propsRest}>
          <path d="M13,7H15V15A2,2 0 0,1 13,17H11A2,2 0 0,1 9,15V14H11V15H13V7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />

        </Icon>
      );
    };
    AlphaJCircleOutlineIcon.displayName = 'AlphaJCircleOutlineIcon';
      