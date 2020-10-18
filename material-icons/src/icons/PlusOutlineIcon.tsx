import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const PlusOutlineIcon: FC<IconInterface> = function PlusOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PlusOutlineIcon ${className}`;
      return (
        <Icon alt="PlusOutline" className={classNames} {...propsRest}>
          <path d="M4,9H9V4H15V9H20V15H15V20H9V15H4V9M11,13V18H13V13H18V11H13V6H11V11H6V13H11Z" />

        </Icon>
      );
    };
    PlusOutlineIcon.displayName = 'PlusOutlineIcon';
      