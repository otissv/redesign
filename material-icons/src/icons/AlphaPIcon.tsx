import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const AlphaPIcon: FC<IconInterface> = function AlphaPIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaPIcon ${className}`;
      return (
        <Icon alt="AlphaP" className={classNames} {...propsRest}>
          <path d="M9,7V17H11V13H13A2,2 0 0,0 15,11V9A2,2 0 0,0 13,7H9M11,9H13V11H11V9Z" />

        </Icon>
      );
    };
    AlphaPIcon.displayName = 'AlphaPIcon';
      