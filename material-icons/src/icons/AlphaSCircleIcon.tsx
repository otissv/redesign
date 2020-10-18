import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const AlphaSCircleIcon: FC<IconInterface> = function AlphaSCircleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaSCircleIcon ${className}`;
      return (
        <Icon alt="AlphaSCircle" className={classNames} {...propsRest}>
          <path d="M11,7A2,2 0 0,0 9,9V11A2,2 0 0,0 11,13H13V15H9V17H13A2,2 0 0,0 15,15V13A2,2 0 0,0 13,11H11V9H15V7H11M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z" />

        </Icon>
      );
    };
    AlphaSCircleIcon.displayName = 'AlphaSCircleIcon';
      