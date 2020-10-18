import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const AlphaHCircleIcon: FC<IconInterface> = function AlphaHCircleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaHCircleIcon ${className}`;
      return (
        <Icon alt="AlphaHCircle" className={classNames} {...propsRest}>
          <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M9,7V17H11V13H13V17H15V7H13V11H11V7H9Z" />

        </Icon>
      );
    };
    AlphaHCircleIcon.displayName = 'AlphaHCircleIcon';
      