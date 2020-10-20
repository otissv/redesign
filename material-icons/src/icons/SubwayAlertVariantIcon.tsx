import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const SubwayAlertVariantIcon: FC<IconInterface> = function SubwayAlertVariantIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SubwayAlertVariantIcon ${className}`;
      return (
        <Icon alt="SubwayAlertVariant" className={classNames} {...propsRest}>
          <path d="M16,11V6H11V11H16M14.5,17A1.5,1.5 0 0,0 16,15.5A1.5,1.5 0 0,0 14.5,14A1.5,1.5 0 0,0 13,15.5A1.5,1.5 0 0,0 14.5,17M9,11V6H4V11H9M5.5,17A1.5,1.5 0 0,0 7,15.5A1.5,1.5 0 0,0 5.5,14A1.5,1.5 0 0,0 4,15.5A1.5,1.5 0 0,0 5.5,17M10,2C14.42,2 18,2.5 18,6V15.5A3.5,3.5 0 0,1 14.5,19L16,20.5V21H4V20.5L5.5,19A3.5,3.5 0 0,1 2,15.5V6C2,2.5 5.58,2 10,2M20,12V7H22V12H20M20,16V14H22V16H20Z" />

        </Icon>
      );
    };
    SubwayAlertVariantIcon.displayName = 'SubwayAlertVariantIcon';
      