import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const DragIcon: FC<IconInterface> = function DragIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `DragIcon ${className}`;
      return (
        <Icon alt="Drag" className={classNames} {...propsRest}>
          <path d="M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z" />

        </Icon>
      );
    };
    DragIcon.displayName = 'DragIcon';
      