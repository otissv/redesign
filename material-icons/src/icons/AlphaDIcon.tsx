import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const AlphaDIcon: FC<IconInterface> = function AlphaDIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaDIcon ${className}`;
      return (
        <Icon alt="AlphaD" className={classNames} {...propsRest}>
          <path d="M9,7V17H13A2,2 0 0,0 15,15V9A2,2 0 0,0 13,7H9M11,9H13V15H11V9Z" />

        </Icon>
      );
    };
    AlphaDIcon.displayName = 'AlphaDIcon';
      