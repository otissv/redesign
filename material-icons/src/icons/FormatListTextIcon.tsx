import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FormatListTextIcon: FC<IconInterface> = function FormatListTextIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FormatListTextIcon ${className}`;
      return (
        <Icon alt="FormatListText" className={classNames} {...propsRest}>
          <path d="M2 14H8V20H2M16 8H10V10H16M2 10H8V4H2M10 4V6H22V4M10 20H16V18H10M10 16H22V14H10" />

        </Icon>
      );
    };
    FormatListTextIcon.displayName = 'FormatListTextIcon';
      