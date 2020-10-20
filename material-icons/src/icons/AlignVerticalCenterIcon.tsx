import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const AlignVerticalCenterIcon: FC<IconInterface> = function AlignVerticalCenterIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlignVerticalCenterIcon ${className}`;
      return (
        <Icon alt="AlignVerticalCenter" className={classNames} {...propsRest}>
          <path d="M5 20V13H2V11H5V4H11V11H13V7H19V11H22V13H19V17H13V13H11V20H5Z" />

        </Icon>
      );
    };
    AlignVerticalCenterIcon.displayName = 'AlignVerticalCenterIcon';
      