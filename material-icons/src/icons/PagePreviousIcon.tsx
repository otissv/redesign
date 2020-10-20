import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const PagePreviousIcon: FC<IconInterface> = function PagePreviousIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PagePreviousIcon ${className}`;
      return (
        <Icon alt="PagePrevious" className={classNames} {...propsRest}>
          <path d="M4,21H19A2,2 0 0,0 21,19V13H17V15L13,12L17,9V11H21V5A2,2 0 0,0 19,3H4A2,2 0 0,0 2,5V19A2,2 0 0,0 4,21M4,15H8V17H4V15M4,11H11V13H4V11M4,7H11V9H4V7M21,11H24V13H21V11Z" />

        </Icon>
      );
    };
    PagePreviousIcon.displayName = 'PagePreviousIcon';
      