import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const AlphaXBoxIcon: FC<IconInterface> = function AlphaXBoxIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaXBoxIcon ${className}`;
      return (
        <Icon alt="AlphaXBox" className={classNames} {...propsRest}>
          <path d="M9,7L11,12L9,17H11L12,14.5L13,17H15L13,12L15,7H13L12,9.5L11,7H9M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z" />

        </Icon>
      );
    };
    AlphaXBoxIcon.displayName = 'AlphaXBoxIcon';
      