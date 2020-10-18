import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const AlphaHCircleOutlineIcon: FC<IconInterface> = function AlphaHCircleOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaHCircleOutlineIcon ${className}`;
      return (
        <Icon alt="AlphaHCircleOutline" className={classNames} {...propsRest}>
          <path d="M9,7H11V11H13V7H15V17H13V13H11V17H9V7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />

        </Icon>
      );
    };
    AlphaHCircleOutlineIcon.displayName = 'AlphaHCircleOutlineIcon';
      