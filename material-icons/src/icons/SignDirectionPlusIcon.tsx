import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const SignDirectionPlusIcon: FC<IconInterface> = function SignDirectionPlusIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SignDirectionPlusIcon ${className}`;
      return (
        <Icon alt="SignDirectionPlus" className={classNames} {...propsRest}>
          <path d="M13 20H13.09A5.5 5.5 0 0 0 13.81 22H9A2 2 0 0 1 11 20V12H3.5L6 9.5L3.5 7H11V3L12 2L13 3V7H18L20.5 9.5L18 12H13M18 15V18H15V20H18V23H20V20H23V18H20V15Z" />

        </Icon>
      );
    };
    SignDirectionPlusIcon.displayName = 'SignDirectionPlusIcon';
      