import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const SizeSIcon: FC<IconInterface> = function SizeSIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SizeSIcon ${className}`;
      return (
        <Icon alt="SizeS" className={classNames} {...propsRest}>
          <path d="M11 7C9.9 7 9 7.9 9 9V11C9 12.11 9.9 13 11 13H13V15H9V17H13C14.11 17 15 16.11 15 15V13C15 11.9 14.11 11 13 11H11V9H15V7H11Z" />

        </Icon>
      );
    };
    SizeSIcon.displayName = 'SizeSIcon';
      