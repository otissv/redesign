import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const CallSplitIcon: FC<IconInterface> = function CallSplitIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CallSplitIcon ${className}`;
      return (
        <Icon alt="CallSplit" className={classNames} {...propsRest}>
          <path d="M14,4L16.29,6.29L13.41,9.17L14.83,10.59L17.71,7.71L20,10V4M10,4H4V10L6.29,7.71L11,12.41V20H13V11.59L7.71,6.29" />

        </Icon>
      );
    };
    CallSplitIcon.displayName = 'CallSplitIcon';
      