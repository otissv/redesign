import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const PlusIcon: FC<IconInterface> = function PlusIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PlusIcon ${className}`;
      return (
        <Icon alt="Plus" className={classNames} {...propsRest}>
          <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />

        </Icon>
      );
    };
    PlusIcon.displayName = 'PlusIcon';
      