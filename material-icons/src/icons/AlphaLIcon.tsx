import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const AlphaLIcon: FC<IconInterface> = function AlphaLIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaLIcon ${className}`;
      return (
        <Icon alt="AlphaL" className={classNames} {...propsRest}>
          <path d="M9,7V17H15V15H11V7H9Z" />

        </Icon>
      );
    };
    AlphaLIcon.displayName = 'AlphaLIcon';
      