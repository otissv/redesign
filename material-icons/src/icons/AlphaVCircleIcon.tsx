import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const AlphaVCircleIcon: FC<IconInterface> = function AlphaVCircleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaVCircleIcon ${className}`;
      return (
        <Icon alt="AlphaVCircle" className={classNames} {...propsRest}>
          <path d="M9,7L11,17H13L15,7H13L12,12L11,7H9M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z" />

        </Icon>
      );
    };
    AlphaVCircleIcon.displayName = 'AlphaVCircleIcon';
      