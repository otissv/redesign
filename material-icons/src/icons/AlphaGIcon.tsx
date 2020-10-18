import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const AlphaGIcon: FC<IconInterface> = function AlphaGIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaGIcon ${className}`;
      return (
        <Icon alt="AlphaG" className={classNames} {...propsRest}>
          <path d="M11,7A2,2 0 0,0 9,9V15A2,2 0 0,0 11,17H13A2,2 0 0,0 15,15V11H13V15H11V9H15V7H11Z" />

        </Icon>
      );
    };
    AlphaGIcon.displayName = 'AlphaGIcon';
      