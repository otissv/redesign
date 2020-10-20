import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const SnowflakeVariantIcon: FC<IconInterface> = function SnowflakeVariantIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SnowflakeVariantIcon ${className}`;
      return (
        <Icon alt="SnowflakeVariant" className={classNames} {...propsRest}>
          <path d="M14.25,12L16.27,11H23L22,9H18.03L20.42,5.83L19.43,3.83L15.37,9.2L13.35,10.21L13.75,8L17.83,2.62L15.64,2.22L12,7L8.4,2.2L6.2,2.6L10.26,8L10.66,10.21L8.82,9.29L8.66,9.21L4.6,3.8L3.6,5.8L6,9H2L1,11H7.77L9.75,12L7.73,13H1L2,15H5.97L3.58,18.17L4.57,20.17L8.63,14.8L10.65,13.79L10.25,16L6.17,21.38L8.36,21.79L12,17L15.6,21.8L17.8,21.4L13.74,16L13.34,13.79L15.34,14.79L19.4,20.2L20.4,18.2L18,15H22L23,13H16.23" />

        </Icon>
      );
    };
    SnowflakeVariantIcon.displayName = 'SnowflakeVariantIcon';
      