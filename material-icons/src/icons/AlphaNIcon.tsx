import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const AlphaNIcon: FC<IconInterface> = function AlphaNIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlphaNIcon ${className}`;
      return (
        <Icon alt="AlphaN" className={classNames} {...propsRest}>
          <path d="M9,7V17H11V12L13,17H15V7H13V12L11,7H9Z" />

        </Icon>
      );
    };
    AlphaNIcon.displayName = 'AlphaNIcon';
      