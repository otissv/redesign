import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const SizeLIcon: FC<IconInterface> = function SizeLIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SizeLIcon ${className}`;
      return (
        <Icon alt="SizeL" className={classNames} {...propsRest}>
          <path d="M9 7V17H15V15H11V7H9Z" />

        </Icon>
      );
    };
    SizeLIcon.displayName = 'SizeLIcon';
      