import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const BarnIcon: FC<IconInterface> = function BarnIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `BarnIcon ${className}`;
      return (
        <Icon alt="Barn" className={classNames} {...propsRest}>
          <path d="M12,3L3,8.2V21H9L11.9,18L15,21H21V8.2L12,3M7.9,20V14L10.9,17L7.9,20M8.9,13H14.9L11.9,16L8.9,13M15.9,20L12.9,17L15.9,14V20M15,11H8.8V9H15V11Z" />

        </Icon>
      );
    };
    BarnIcon.displayName = 'BarnIcon';
      