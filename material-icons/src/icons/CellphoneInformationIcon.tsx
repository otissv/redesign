import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const CellphoneInformationIcon: FC<IconInterface> = function CellphoneInformationIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CellphoneInformationIcon ${className}`;
      return (
        <Icon alt="CellphoneInformation" className={classNames} {...propsRest}>
          <path d="M13 7H11V9H13V7M13 11H11V17H13V11M17 1H7C5.9 1 5 1.9 5 3V21C5 22.1 5.9 23 7 23H17C18.1 23 19 22.1 19 21V3C19 1.9 18.1 1 17 1M17 19H7V5H17V19Z" />

        </Icon>
      );
    };
    CellphoneInformationIcon.displayName = 'CellphoneInformationIcon';
      