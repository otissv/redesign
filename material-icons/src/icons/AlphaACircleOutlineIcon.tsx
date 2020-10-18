import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const AlphaACircleOutlineIcon: FC<IconInterface> = function AlphaACircleOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaACircleOutlineIcon ${className}`;
      return (
        <Icon alt="AlphaACircleOutline" className={classNames} {...propsRest}>
          <path d="M11,7H13A2,2 0 0,1 15,9V17H13V13H11V17H9V9A2,2 0 0,1 11,7M11,9V11H13V9H11M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z" />

        </Icon>
      );
    };
    AlphaACircleOutlineIcon.displayName = 'AlphaACircleOutlineIcon';
      