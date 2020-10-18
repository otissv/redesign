import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const AlphaHIcon: FC<IconInterface> = function AlphaHIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaHIcon ${className}`;
      return (
        <Icon alt="AlphaH" className={classNames} {...propsRest}>
          <path d="M9,7V17H11V13H13V17H15V7H13V11H11V7H9Z" />

        </Icon>
      );
    };
    AlphaHIcon.displayName = 'AlphaHIcon';
      