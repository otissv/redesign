import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const AlphaXBoxOutlineIcon: FC<IconInterface> = function AlphaXBoxOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaXBoxOutlineIcon ${className}`;
      return (
        <Icon alt="AlphaXBoxOutline" className={classNames} {...propsRest}>
          <path d="M9,7H11L12,9.5L13,7H15L13,12L15,17H13L12,14.5L11,17H9L11,12L9,7M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M5,5V19H19V5H5Z" />

        </Icon>
      );
    };
    AlphaXBoxOutlineIcon.displayName = 'AlphaXBoxOutlineIcon';
      