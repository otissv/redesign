import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const LockQuestionIcon: FC<IconInterface> = function LockQuestionIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `LockQuestionIcon ${className}`;
      return (
        <Icon alt="LockQuestion" className={classNames} {...propsRest}>
          <path d="M12,1A5,5 0 0,0 7,6V8H6A2,2 0 0,0 4,10V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V10A2,2 0 0,0 18,8H17V6A5,5 0 0,0 12,1M12,2.9C13.71,2.9 15.1,4.29 15.1,6V8H8.9V6C8.9,4.29 10.29,2.9 12,2.9M12.19,10.5C13.13,10.5 13.88,10.71 14.42,11.12C14.96,11.54 15.23,12.1 15.23,12.8C15.23,13.24 15.08,13.63 14.79,14C14.5,14.36 14.12,14.64 13.66,14.85C13.4,15 13.23,15.15 13.14,15.32C13.05,15.5 13,15.72 13,16H11C11,15.5 11.1,15.16 11.29,14.92C11.5,14.68 11.84,14.4 12.36,14.08C12.62,13.94 12.83,13.76 13,13.54C13.14,13.33 13.22,13.08 13.22,12.8C13.22,12.5 13.13,12.28 12.95,12.11C12.77,11.93 12.5,11.85 12.19,11.85C11.92,11.85 11.7,11.92 11.5,12.06C11.34,12.2 11.24,12.41 11.24,12.69H9.27C9.22,12 9.5,11.4 10.05,11.04C10.59,10.68 11.3,10.5 12.19,10.5M11,17H13V19H11V17Z" />

        </Icon>
      );
    };
    LockQuestionIcon.displayName = 'LockQuestionIcon';
      