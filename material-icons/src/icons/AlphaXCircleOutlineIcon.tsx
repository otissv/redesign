import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const AlphaXCircleOutlineIcon: FC<IconInterface> = function AlphaXCircleOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaXCircleOutlineIcon ${className}`;
      return (
        <Icon alt="AlphaXCircleOutline" className={classNames} {...propsRest}>
          <path d="M9,7H11L12,9.5L13,7H15L13,12L15,17H13L12,14.5L11,17H9L11,12L9,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />

        </Icon>
      );
    };
    AlphaXCircleOutlineIcon.displayName = 'AlphaXCircleOutlineIcon';
      