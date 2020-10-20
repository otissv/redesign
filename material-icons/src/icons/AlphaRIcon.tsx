import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const AlphaRIcon: FC<IconInterface> = function AlphaRIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaRIcon ${className}`;
      return (
        <Icon alt="AlphaR" className={classNames} {...propsRest}>
          <path d="M9,7V17H11V13H11.8L13,17H15L13.76,12.85C14.5,12.55 15,11.84 15,11V9A2,2 0 0,0 13,7H9M11,9H13V11H11V9Z" />

        </Icon>
      );
    };
    AlphaRIcon.displayName = 'AlphaRIcon';
      