import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const AlphaYCircleOutlineIcon: FC<IconInterface> = function AlphaYCircleOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaYCircleOutlineIcon ${className}`;
      return (
        <Icon alt="AlphaYCircleOutline" className={classNames} {...propsRest}>
          <path d="M9,7H11L12,10L13,7H15L13,13V17H11V13L9,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />

        </Icon>
      );
    };
    AlphaYCircleOutlineIcon.displayName = 'AlphaYCircleOutlineIcon';
      