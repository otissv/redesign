import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const AlphaYCircleIcon: FC<IconInterface> = function AlphaYCircleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaYCircleIcon ${className}`;
      return (
        <Icon alt="AlphaYCircle" className={classNames} {...propsRest}>
          <path d="M9,7L11,13V17H13V13L15,7H13L12,10L11,7H9M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z" />

        </Icon>
      );
    };
    AlphaYCircleIcon.displayName = 'AlphaYCircleIcon';
      