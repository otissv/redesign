import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const AlphaWCircleIcon: FC<IconInterface> = function AlphaWCircleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaWCircleIcon ${className}`;
      return (
        <Icon alt="AlphaWCircle" className={classNames} {...propsRest}>
          <path d="M9,17H15A2,2 0 0,0 17,15V7H15V15H13V8H11V15H9V7H7V15A2,2 0 0,0 9,17M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z" />

        </Icon>
      );
    };
    AlphaWCircleIcon.displayName = 'AlphaWCircleIcon';
      