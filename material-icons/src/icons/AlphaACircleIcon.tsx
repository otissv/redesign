import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const AlphaACircleIcon: FC<IconInterface> = function AlphaACircleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaACircleIcon ${className}`;
      return (
        <Icon alt="AlphaACircle" className={classNames} {...propsRest}>
          <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,7A2,2 0 0,0 9,9V17H11V13H13V17H15V9A2,2 0 0,0 13,7H11M11,9H13V11H11V9Z" />

        </Icon>
      );
    };
    AlphaACircleIcon.displayName = 'AlphaACircleIcon';
      