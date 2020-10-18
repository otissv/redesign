import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const AlphaCCircleOutlineIcon: FC<IconInterface> = function AlphaCCircleOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaCCircleOutlineIcon ${className}`;
      return (
        <Icon alt="AlphaCCircleOutline" className={classNames} {...propsRest}>
          <path d="M11,7H13A2,2 0 0,1 15,9V10H13V9H11V15H13V14H15V15A2,2 0 0,1 13,17H11A2,2 0 0,1 9,15V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />

        </Icon>
      );
    };
    AlphaCCircleOutlineIcon.displayName = 'AlphaCCircleOutlineIcon';
      