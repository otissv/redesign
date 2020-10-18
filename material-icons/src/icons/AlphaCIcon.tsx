import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const AlphaCIcon: FC<IconInterface> = function AlphaCIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaCIcon ${className}`;
      return (
        <Icon alt="AlphaC" className={classNames} {...propsRest}>
          <path d="M11,7A2,2 0 0,0 9,9V15A2,2 0 0,0 11,17H13A2,2 0 0,0 15,15V14H13V15H11V9H13V10H15V9A2,2 0 0,0 13,7H11Z" />

        </Icon>
      );
    };
    AlphaCIcon.displayName = 'AlphaCIcon';
      