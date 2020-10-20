import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const SeatIndividualSuiteIcon: FC<IconInterface> = function SeatIndividualSuiteIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SeatIndividualSuiteIcon ${className}`;
      return (
        <Icon alt="SeatIndividualSuite" className={classNames} {...propsRest}>
          <path d="M7,13A3,3 0 0,0 10,10A3,3 0 0,0 7,7A3,3 0 0,0 4,10A3,3 0 0,0 7,13M19,7H11V14H3V7H1V17H23V11A4,4 0 0,0 19,7Z" />

        </Icon>
      );
    };
    SeatIndividualSuiteIcon.displayName = 'SeatIndividualSuiteIcon';
      