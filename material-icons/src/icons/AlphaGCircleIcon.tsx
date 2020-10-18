import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const AlphaGCircleIcon: FC<IconInterface> = function AlphaGCircleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaGCircleIcon ${className}`;
      return (
        <Icon alt="AlphaGCircle" className={classNames} {...propsRest}>
          <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,7A2,2 0 0,0 9,9V15A2,2 0 0,0 11,17H13A2,2 0 0,0 15,15V11H13V15H11V9H15V7H11Z" />

        </Icon>
      );
    };
    AlphaGCircleIcon.displayName = 'AlphaGCircleIcon';
      