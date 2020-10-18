import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const AlphaUCircleIcon: FC<IconInterface> = function AlphaUCircleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaUCircleIcon ${className}`;
      return (
        <Icon alt="AlphaUCircle" className={classNames} {...propsRest}>
          <path d="M9,7V15A2,2 0 0,0 11,17H13A2,2 0 0,0 15,15V7H13V15H11V7H9M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z" />

        </Icon>
      );
    };
    AlphaUCircleIcon.displayName = 'AlphaUCircleIcon';
      