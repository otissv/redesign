import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const AlphaZIcon: FC<IconInterface> = function AlphaZIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaZIcon ${className}`;
      return (
        <Icon alt="AlphaZ" className={classNames} {...propsRest}>
          <path d="M9,7V9H13L9,15V17H15V15H11L15,9V7H9Z" />

        </Icon>
      );
    };
    AlphaZIcon.displayName = 'AlphaZIcon';
      