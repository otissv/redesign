import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const CommaCircleOutlineIcon: FC<IconInterface> = function CommaCircleOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CommaCircleOutlineIcon ${className}`;
      return (
        <Icon alt="CommaCircleOutline" className={classNames} {...propsRest}>
          <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M10,17H13L15,13V7H9V13H12L10,17Z" />

        </Icon>
      );
    };
    CommaCircleOutlineIcon.displayName = 'CommaCircleOutlineIcon';
      