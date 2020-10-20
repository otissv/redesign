import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const LoadingIcon: FC<IconInterface> = function LoadingIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `LoadingIcon ${className}`;
      return (
        <Icon alt="Loading" className={classNames} {...propsRest}>
          <path d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z" />

        </Icon>
      );
    };
    LoadingIcon.displayName = 'LoadingIcon';
      