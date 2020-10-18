import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const FactoryIcon: FC<IconInterface> = function FactoryIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FactoryIcon ${className}`;
      return (
        <Icon alt="Factory" className={classNames} {...propsRest}>
          <path d="M4,18V20H8V18H4M4,14V16H14V14H4M10,18V20H14V18H10M16,14V16H20V14H16M16,18V20H20V18H16M2,22V8L7,12V8L12,12V8L17,12L18,2H21L22,12V22H2Z" />

        </Icon>
      );
    };
    FactoryIcon.displayName = 'FactoryIcon';
      