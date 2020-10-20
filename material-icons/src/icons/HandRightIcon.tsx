import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const HandRightIcon: FC<IconInterface> = function HandRightIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `HandRightIcon ${className}`;
      return (
        <Icon alt="HandRight" className={classNames} {...propsRest}>
          <path d="M21,6.58V18.67A3.33,3.33 0 0,1 17.67,22H11.58C10.68,22 9.83,21.64 9.21,21L2.67,14.36C2.67,14.36 3.72,13.33 3.75,13.32C3.93,13.16 4.16,13.07 4.41,13.07C4.59,13.07 4.76,13.12 4.91,13.21C4.94,13.22 8.5,15.26 8.5,15.26V5.33A1.25,1.25 0 0,1 9.75,4.08A1.25,1.25 0 0,1 11,5.33V11.17H11.83V3.25A1.25,1.25 0 0,1 13.08,2C13.78,2 14.33,2.56 14.33,3.25V11.17H15.17V4.08C15.17,3.39 15.72,2.83 16.42,2.83A1.25,1.25 0 0,1 17.67,4.08V11.17H18.5V6.58A1.25,1.25 0 0,1 19.75,5.33A1.25,1.25 0 0,1 21,6.58Z" />

        </Icon>
      );
    };
    HandRightIcon.displayName = 'HandRightIcon';
      