import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const FormatHeader6Icon: FC<IconInterface> = function FormatHeader6Icon({
      className,
      ...propsRest
    }) {
      const classNames =  `FormatHeader6Icon ${className}`;
      return (
        <Icon alt="FormatHeader6" className={classNames} {...propsRest}>
          <path d="M3,4H5V10H9V4H11V18H9V12H5V18H3V4M15,4H19A2,2 0 0,1 21,6V7H19V6H15V10H19A2,2 0 0,1 21,12V16A2,2 0 0,1 19,18H15A2,2 0 0,1 13,16V6A2,2 0 0,1 15,4M15,12V16H19V12H15Z" />

        </Icon>
      );
    };
    FormatHeader6Icon.displayName = 'FormatHeader6Icon';
      