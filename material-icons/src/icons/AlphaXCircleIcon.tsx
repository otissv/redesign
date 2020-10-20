import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const AlphaXCircleIcon: FC<IconInterface> = function AlphaXCircleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaXCircleIcon ${className}`;
      return (
        <Icon alt="AlphaXCircle" className={classNames} {...propsRest}>
          <path d="M9,7L11,12L9,17H11L12,14.5L13,17H15L13,12L15,7H13L12,9.5L11,7H9M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z" />

        </Icon>
      );
    };
    AlphaXCircleIcon.displayName = 'AlphaXCircleIcon';
      