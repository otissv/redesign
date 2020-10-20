import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const SimOffIcon: FC<IconInterface> = function SimOffIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SimOffIcon ${className}`;
      return (
        <Icon alt="SimOff" className={classNames} {...propsRest}>
          <path d="M19,5A2,2 0 0,0 17,3H10L7.66,5.34L19,16.68V5M3.65,3.88L2.38,5.15L5,7.77V19A2,2 0 0,0 7,21H17C17.36,21 17.68,20.9 17.97,20.74L19.85,22.62L21.12,21.35L3.65,3.88Z" />

        </Icon>
      );
    };
    SimOffIcon.displayName = 'SimOffIcon';
      