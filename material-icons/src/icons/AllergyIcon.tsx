import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const AllergyIcon: FC<IconInterface> = function AllergyIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AllergyIcon ${className}`;
      return (
        <Icon alt="Allergy" className={classNames} {...propsRest}>
          <path d="M19.75 5.33A1.25 1.25 0 0 0 18.5 6.58V11.17H17.67V4.08A1.25 1.25 0 0 0 15.17 4.08V11.17H14.33V3.25A1.25 1.25 0 1 0 11.83 3.25V11.17H11V5.33A1.25 1.25 0 0 0 8.5 5.33V15.26L4.91 13.26A1 1 0 0 0 4.41 13.12A1 1 0 0 0 3.75 13.37L2.67 14.37L9.21 21A3.29 3.29 0 0 0 11.58 22H17.67A3.33 3.33 0 0 0 21 18.67V6.58A1.25 1.25 0 0 0 19.75 5.33M11 15A1 1 0 1 1 12 14A1 1 0 0 1 11 15M13 18A1 1 0 1 1 14 17A1 1 0 0 1 13 18M18 16A1 1 0 1 1 19 15A1 1 0 0 1 18 16M17 19A1 1 0 1 1 18 18A1 1 0 0 1 17 19M15 15A1 1 0 1 1 16 14A1 1 0 0 1 15 15Z" />

        </Icon>
      );
    };
    AllergyIcon.displayName = 'AllergyIcon';
      