import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const TransmissionTowerIcon: FC<IconInterface> = function TransmissionTowerIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `TransmissionTowerIcon ${className}`;
      return (
        <Icon alt="TransmissionTower" className={classNames} {...propsRest}>
          <path d="M8.28,5.45L6.5,4.55L7.76,2H16.23L17.5,4.55L15.72,5.44L15,4H9L8.28,5.45M18.62,8H14.09L13.3,5H10.7L9.91,8H5.38L4.1,10.55L5.89,11.44L6.62,10H17.38L18.1,11.45L19.89,10.56L18.62,8M17.77,22H15.7L15.46,21.1L12,15.9L8.53,21.1L8.3,22H6.23L9.12,11H11.19L10.83,12.35L12,14.1L13.16,12.35L12.81,11H14.88L17.77,22M11.4,15L10.5,13.65L9.32,18.13L11.4,15M14.68,18.12L13.5,13.64L12.6,15L14.68,18.12Z" />

        </Icon>
      );
    };
    TransmissionTowerIcon.displayName = 'TransmissionTowerIcon';
      