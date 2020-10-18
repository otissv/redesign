import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const SortVariantLockIcon: FC<IconInterface> = function SortVariantLockIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SortVariantLockIcon ${className}`;
      return (
        <Icon alt="SortVariantLock" className={classNames} {...propsRest}>
          <path d="M3,13V11H15V13H3M3,6H21V8H3V6M3,18V16H9V18H3M22,22H14V18H15V17A3,3 0 0,1 18,14A3,3 0 0,1 21,17V18H22V22M18,16A1,1 0 0,0 17,17V18H19V17A1,1 0 0,0 18,16Z" />

        </Icon>
      );
    };
    SortVariantLockIcon.displayName = 'SortVariantLockIcon';
      