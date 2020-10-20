import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const NearMeIcon: FC<IconInterface> = function NearMeIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `NearMeIcon ${className}`;
      return (
        <Icon alt="NearMe" className={classNames} {...propsRest}>
          <path d="M21,3L3,10.53V11.5L9.84,14.16L12.5,21H13.46L21,3Z" />

        </Icon>
      );
    };
    NearMeIcon.displayName = 'NearMeIcon';
      