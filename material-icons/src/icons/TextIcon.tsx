import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const TextIcon: FC<IconInterface> = function TextIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `TextIcon ${className}`;
      return (
        <Icon alt="Text" className={classNames} {...propsRest}>
          <path d="M21,6V8H3V6H21M3,18H12V16H3V18M3,13H21V11H3V13Z" />

        </Icon>
      );
    };
    TextIcon.displayName = 'TextIcon';
      