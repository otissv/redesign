import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const AlphaUCircleOutlineIcon: FC<IconInterface> = function AlphaUCircleOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaUCircleOutlineIcon ${className}`;
      return (
        <Icon alt="AlphaUCircleOutline" className={classNames} {...propsRest}>
          <path d="M9,7H11V15H13V7H15V15A2,2 0 0,1 13,17H11A2,2 0 0,1 9,15V7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />

        </Icon>
      );
    };
    AlphaUCircleOutlineIcon.displayName = 'AlphaUCircleOutlineIcon';
      