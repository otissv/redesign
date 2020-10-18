import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const AlphaKCircleIcon: FC<IconInterface> = function AlphaKCircleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaKCircleIcon ${className}`;
      return (
        <Icon alt="AlphaKCircle" className={classNames} {...propsRest}>
          <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M9,7V17H11V13.67L13,17H15L12,12L15,7H13L11,10.33V7H9Z" />

        </Icon>
      );
    };
    AlphaKCircleIcon.displayName = 'AlphaKCircleIcon';
      