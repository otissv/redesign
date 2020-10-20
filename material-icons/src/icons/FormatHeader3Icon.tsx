import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FormatHeader3Icon: FC<IconInterface> = function FormatHeader3Icon({
      className,
      ...propsRest
    }) {
      const classNames =  `FormatHeader3Icon ${className}`;
      return (
        <Icon alt="FormatHeader3" className={classNames} {...propsRest}>
          <path d="M3,4H5V10H9V4H11V18H9V12H5V18H3V4M15,4H19A2,2 0 0,1 21,6V16A2,2 0 0,1 19,18H15A2,2 0 0,1 13,16V15H15V16H19V12H15V10H19V6H15V7H13V6A2,2 0 0,1 15,4Z" />

        </Icon>
      );
    };
    FormatHeader3Icon.displayName = 'FormatHeader3Icon';
      