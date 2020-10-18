import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const AlphaICircleOutlineIcon: FC<IconInterface> = function AlphaICircleOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaICircleOutlineIcon ${className}`;
      return (
        <Icon alt="AlphaICircleOutline" className={classNames} {...propsRest}>
          <path d="M14,7V9H13V15H14V17H10V15H11V9H10V7H14M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />

        </Icon>
      );
    };
    AlphaICircleOutlineIcon.displayName = 'AlphaICircleOutlineIcon';
      