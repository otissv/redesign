import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const AlphaSCircleOutlineIcon: FC<IconInterface> = function AlphaSCircleOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaSCircleOutlineIcon ${className}`;
      return (
        <Icon alt="AlphaSCircleOutline" className={classNames} {...propsRest}>
          <path d="M11,7H15V9H11V11H13A2,2 0 0,1 15,13V15A2,2 0 0,1 13,17H9V15H13V13H11A2,2 0 0,1 9,11V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />

        </Icon>
      );
    };
    AlphaSCircleOutlineIcon.displayName = 'AlphaSCircleOutlineIcon';
      