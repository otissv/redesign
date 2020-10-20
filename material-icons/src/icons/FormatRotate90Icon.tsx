import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const FormatRotate90Icon: FC<IconInterface> = function FormatRotate90Icon({
      className,
      ...propsRest
    }) {
      const classNames =  `FormatRotate90Icon ${className}`;
      return (
        <Icon alt="FormatRotate90" className={classNames} {...propsRest}>
          <path d="M7.34,6.41L0.86,12.9L7.35,19.38L13.84,12.9L7.34,6.41M3.69,12.9L7.35,9.24L11,12.9L7.34,16.56L3.69,12.9M19.36,6.64C17.61,4.88 15.3,4 13,4V0.76L8.76,5L13,9.24V6C14.79,6 16.58,6.68 17.95,8.05C20.68,10.78 20.68,15.22 17.95,17.95C16.58,19.32 14.79,20 13,20C12.03,20 11.06,19.79 10.16,19.39L8.67,20.88C10,21.62 11.5,22 13,22C15.3,22 17.61,21.12 19.36,19.36C22.88,15.85 22.88,10.15 19.36,6.64Z" />

        </Icon>
      );
    };
    FormatRotate90Icon.displayName = 'FormatRotate90Icon';
      