import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const AlphaVCircleOutlineIcon: FC<IconInterface> = function AlphaVCircleOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaVCircleOutlineIcon ${className}`;
      return (
        <Icon alt="AlphaVCircleOutline" className={classNames} {...propsRest}>
          <path d="M9,7H11L12,12L13,7H15L13,17H11L9,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />

        </Icon>
      );
    };
    AlphaVCircleOutlineIcon.displayName = 'AlphaVCircleOutlineIcon';
      