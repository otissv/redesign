import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const VuejsIcon: FC<IconInterface> = function VuejsIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `VuejsIcon ${className}`;
      return (
        <Icon alt="Vuejs" className={classNames} {...propsRest}>
          <path d="M2,3H5.5L12,15L18.5,3H22L12,21L2,3M6.5,3H9.5L12,7.58L14.5,3H17.5L12,13.08L6.5,3Z" />

        </Icon>
      );
    };
    VuejsIcon.displayName = 'VuejsIcon';
      