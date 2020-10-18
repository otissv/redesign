import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const AlphaAIcon: FC<IconInterface> = function AlphaAIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaAIcon ${className}`;
      return (
        <Icon alt="AlphaA" className={classNames} {...propsRest}>
          <path d="M11,7A2,2 0 0,0 9,9V17H11V13H13V17H15V9A2,2 0 0,0 13,7H11M11,9H13V11H11V9Z" />

        </Icon>
      );
    };
    AlphaAIcon.displayName = 'AlphaAIcon';
      