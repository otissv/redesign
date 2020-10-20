import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const LanguageCss3Icon: FC<IconInterface> = function LanguageCss3Icon({
      className,
      ...propsRest
    }) {
      const classNames =  `LanguageCss3Icon ${className}`;
      return (
        <Icon alt="LanguageCss3" className={classNames} {...propsRest}>
          <path d="M5,3L4.35,6.34H17.94L17.5,8.5H3.92L3.26,11.83H16.85L16.09,15.64L10.61,17.45L5.86,15.64L6.19,14H2.85L2.06,18L9.91,21L18.96,18L20.16,11.97L20.4,10.76L21.94,3H5Z" />

        </Icon>
      );
    };
    LanguageCss3Icon.displayName = 'LanguageCss3Icon';
      