import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ForwardburgerIcon: FC<IconInterface> = function ForwardburgerIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ForwardburgerIcon ${className}`;
      return (
        <Icon alt="Forwardburger" className={classNames} {...propsRest}>
          <path d="M19,13H3V11H19L15,7L16.4,5.6L22.8,12L16.4,18.4L15,17L19,13M3,6H13V8H3V6M13,16V18H3V16H13Z" />

        </Icon>
      );
    };
    ForwardburgerIcon.displayName = 'ForwardburgerIcon';
      