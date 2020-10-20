import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const AlphaICircleIcon: FC<IconInterface> = function AlphaICircleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaICircleIcon ${className}`;
      return (
        <Icon alt="AlphaICircle" className={classNames} {...propsRest}>
          <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M14,7H10V9H11V15H10V17H14V15H13V9H14V7Z" />

        </Icon>
      );
    };
    AlphaICircleIcon.displayName = 'AlphaICircleIcon';
      