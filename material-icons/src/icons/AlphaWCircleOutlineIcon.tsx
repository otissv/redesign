import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const AlphaWCircleOutlineIcon: FC<IconInterface> = function AlphaWCircleOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaWCircleOutlineIcon ${className}`;
      return (
        <Icon alt="AlphaWCircleOutline" className={classNames} {...propsRest}>
          <path d="M9,17A2,2 0 0,1 7,15V7H9V15H11V8H13V15H15V7H17V15A2,2 0 0,1 15,17H9M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />

        </Icon>
      );
    };
    AlphaWCircleOutlineIcon.displayName = 'AlphaWCircleOutlineIcon';
      