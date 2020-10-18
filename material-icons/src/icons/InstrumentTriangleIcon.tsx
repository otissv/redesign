import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const InstrumentTriangleIcon: FC<IconInterface> = function InstrumentTriangleIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `InstrumentTriangleIcon ${className}`;
      return (
        <Icon alt="InstrumentTriangle" className={classNames} {...propsRest}>
          <path d="M11.5 2H10.5V6.2C10.4 6.3 10.3 6.3 10.2 6.5L2.1 20.7C1.8 21.3 2.2 22 2.9 22H16V20H4.8L11 9.2L16.7 19.2L18.4 18.2L11.8 6.4L11.5 6.1V2M21 6H20V18L19.5 22H21.5L21 18V6Z" />

        </Icon>
      );
    };
    InstrumentTriangleIcon.displayName = 'InstrumentTriangleIcon';
      