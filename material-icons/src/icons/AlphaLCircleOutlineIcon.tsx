import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const AlphaLCircleOutlineIcon: FC<IconInterface> = function AlphaLCircleOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaLCircleOutlineIcon ${className}`;
      return (
        <Icon alt="AlphaLCircleOutline" className={classNames} {...propsRest}>
          <path d="M9,7H11V15H15V17H9V7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />

        </Icon>
      );
    };
    AlphaLCircleOutlineIcon.displayName = 'AlphaLCircleOutlineIcon';
      