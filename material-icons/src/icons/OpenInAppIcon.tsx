import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const OpenInAppIcon: FC<IconInterface> = function OpenInAppIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `OpenInAppIcon ${className}`;
      return (
        <Icon alt="OpenInApp" className={classNames} {...propsRest}>
          <path d="M12,10L8,14H11V20H13V14H16M19,4H5C3.89,4 3,4.9 3,6V18A2,2 0 0,0 5,20H9V18H5V8H19V18H15V20H19A2,2 0 0,0 21,18V6A2,2 0 0,0 19,4Z" />

        </Icon>
      );
    };
    OpenInAppIcon.displayName = 'OpenInAppIcon';
      