import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const AlphaDCircleIcon: FC<IconInterface> = function AlphaDCircleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaDCircleIcon ${className}`;
      return (
        <Icon alt="AlphaDCircle" className={classNames} {...propsRest}>
          <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M9,7V17H13A2,2 0 0,0 15,15V9A2,2 0 0,0 13,7H9M11,9H13V15H11V9Z" />

        </Icon>
      );
    };
    AlphaDCircleIcon.displayName = 'AlphaDCircleIcon';
      