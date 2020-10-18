import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const SelectDragIcon: FC<IconInterface> = function SelectDragIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SelectDragIcon ${className}`;
      return (
        <Icon alt="SelectDrag" className={classNames} {...propsRest}>
          <path d="M13,17H17V13H19V17H23V19H19V23H17V19H13V17M11,17V19H9V17H11M7,17V19H5V17H7M19,9V11H17V9H19M19,5V7H17V5H19M15,5V7H13V5H15M11,5V7H9V5H11M7,5V7H5V5H7M7,13V15H5V13H7M7,9V11H5V9H7Z" />

        </Icon>
      );
    };
    SelectDragIcon.displayName = 'SelectDragIcon';
      