import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const CallMergeIcon: FC<IconInterface> = function CallMergeIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CallMergeIcon ${className}`;
      return (
        <Icon alt="CallMerge" className={classNames} {...propsRest}>
          <path d="M17,20.41L18.41,19L15,15.59L13.59,17M7.5,8H11V13.59L5.59,19L7,20.41L13,14.41V8H16.5L12,3.5" />

        </Icon>
      );
    };
    CallMergeIcon.displayName = 'CallMergeIcon';
      