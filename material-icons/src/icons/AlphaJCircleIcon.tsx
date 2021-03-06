import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const AlphaJCircleIcon: FC<IconInterface> = function AlphaJCircleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaJCircleIcon ${className}`;
      return (
        <Icon alt="AlphaJCircle" className={classNames} {...propsRest}>
          <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M13,7V15H11V14H9V15A2,2 0 0,0 11,17H13A2,2 0 0,0 15,15V7H13Z" />

        </Icon>
      );
    };
    AlphaJCircleIcon.displayName = 'AlphaJCircleIcon';
      