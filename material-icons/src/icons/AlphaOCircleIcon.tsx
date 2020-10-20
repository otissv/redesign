import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const AlphaOCircleIcon: FC<IconInterface> = function AlphaOCircleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaOCircleIcon ${className}`;
      return (
        <Icon alt="AlphaOCircle" className={classNames} {...propsRest}>
          <path d="M11,7A2,2 0 0,0 9,9V15A2,2 0 0,0 11,17H13A2,2 0 0,0 15,15V9A2,2 0 0,0 13,7H11M11,9H13V15H11V9M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z" />

        </Icon>
      );
    };
    AlphaOCircleIcon.displayName = 'AlphaOCircleIcon';
      