import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const AlphaTIcon: FC<IconInterface> = function AlphaTIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaTIcon ${className}`;
      return (
        <Icon alt="AlphaT" className={classNames} {...propsRest}>
          <path d="M9,7V9H11V17H13V9H15V7H9Z" />

        </Icon>
      );
    };
    AlphaTIcon.displayName = 'AlphaTIcon';
      