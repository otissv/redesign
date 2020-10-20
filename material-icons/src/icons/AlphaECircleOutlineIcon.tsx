import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const AlphaECircleOutlineIcon: FC<IconInterface> = function AlphaECircleOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaECircleOutlineIcon ${className}`;
      return (
        <Icon alt="AlphaECircleOutline" className={classNames} {...propsRest}>
          <path d="M9,7H15V9H11V11H15V13H11V15H15V17H9V7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />

        </Icon>
      );
    };
    AlphaECircleOutlineIcon.displayName = 'AlphaECircleOutlineIcon';
      