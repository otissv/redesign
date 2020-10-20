import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ShuffleDisabledIcon: FC<IconInterface> = function ShuffleDisabledIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ShuffleDisabledIcon ${className}`;
      return (
        <Icon alt="ShuffleDisabled" className={classNames} {...propsRest}>
          <path d="M16,4.5V7H5V9H16V11.5L19.5,8M16,12.5V15H5V17H16V19.5L19.5,16" />

        </Icon>
      );
    };
    ShuffleDisabledIcon.displayName = 'ShuffleDisabledIcon';
      