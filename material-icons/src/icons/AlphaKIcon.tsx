import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const AlphaKIcon: FC<IconInterface> = function AlphaKIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaKIcon ${className}`;
      return (
        <Icon alt="AlphaK" className={classNames} {...propsRest}>
          <path d="M9,7V17H11V13.67L13,17H15L12,12L15,7H13L11,10.33V7H9Z" />

        </Icon>
      );
    };
    AlphaKIcon.displayName = 'AlphaKIcon';
      