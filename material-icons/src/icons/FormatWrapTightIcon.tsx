import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FormatWrapTightIcon: FC<IconInterface> = function FormatWrapTightIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FormatWrapTightIcon ${className}`;
      return (
        <Icon alt="FormatWrapTight" className={classNames} {...propsRest}>
          <path d="M12,7L17,17H7L12,7M3,3H21V5H3V3M3,7H9V9H3V7M21,7V9H15V7H21M3,11H7V13H3V11M21,11V13H17V11H21M3,15H6V17H3V15M21,15V17H18V15H21M3,19H21V21H3V19Z" />

        </Icon>
      );
    };
    FormatWrapTightIcon.displayName = 'FormatWrapTightIcon';
      