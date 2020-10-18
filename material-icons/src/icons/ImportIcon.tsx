import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ImportIcon: FC<IconInterface> = function ImportIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ImportIcon ${className}`;
      return (
        <Icon alt="Import" className={classNames} {...propsRest}>
          <path d="M14,12L10,8V11H2V13H10V16M20,18V6C20,4.89 19.1,4 18,4H6A2,2 0 0,0 4,6V9H6V6H18V18H6V15H4V18A2,2 0 0,0 6,20H18A2,2 0 0,0 20,18Z" />

        </Icon>
      );
    };
    ImportIcon.displayName = 'ImportIcon';
      