import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FlagVariantOutlineIcon: FC<IconInterface> = function FlagVariantOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FlagVariantOutlineIcon ${className}`;
      return (
        <Icon alt="FlagVariantOutline" className={classNames} {...propsRest}>
          <path d="M6,3A1,1 0 0,1 7,4V4.88C8.06,4.44 9.5,4 11,4C14,4 14,6 16,6C19,6 20,4 20,4V12C20,12 19,14 16,14C13,14 13,12 11,12C8,12 7,14 7,14V21H5V4A1,1 0 0,1 6,3M7,7.25V11.5C7,11.5 9,10 11,10C13,10 14,12 16,12C18,12 18,11 18,11V7.5C18,7.5 17,8 16,8C14,8 13,6 11,6C9,6 7,7.25 7,7.25Z" />

        </Icon>
      );
    };
    FlagVariantOutlineIcon.displayName = 'FlagVariantOutlineIcon';
      