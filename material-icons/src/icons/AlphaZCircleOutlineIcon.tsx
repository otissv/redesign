import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const AlphaZCircleOutlineIcon: FC<IconInterface> = function AlphaZCircleOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaZCircleOutlineIcon ${className}`;
      return (
        <Icon alt="AlphaZCircleOutline" className={classNames} {...propsRest}>
          <path d="M9,7H15V9L11,15H15V17H9V15L13,9H9V7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />

        </Icon>
      );
    };
    AlphaZCircleOutlineIcon.displayName = 'AlphaZCircleOutlineIcon';
      