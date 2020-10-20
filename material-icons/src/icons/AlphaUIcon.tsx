import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const AlphaUIcon: FC<IconInterface> = function AlphaUIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaUIcon ${className}`;
      return (
        <Icon alt="AlphaU" className={classNames} {...propsRest}>
          <path d="M9,7V15A2,2 0 0,0 11,17H13A2,2 0 0,0 15,15V7H13V15H11V7H9Z" />

        </Icon>
      );
    };
    AlphaUIcon.displayName = 'AlphaUIcon';
      