import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ArrangeSendToBackIcon: FC<IconInterface> = function ArrangeSendToBackIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ArrangeSendToBackIcon ${className}`;
      return (
        <Icon alt="ArrangeSendToBack" className={classNames} {...propsRest}>
          <path d="M2,2H11V11H2V2M9,4H4V9H9V4M22,13V22H13V13H22M15,20H20V15H15V20M16,8V11H13V8H16M11,16H8V13H11V16Z" />

        </Icon>
      );
    };
    ArrangeSendToBackIcon.displayName = 'ArrangeSendToBackIcon';
      