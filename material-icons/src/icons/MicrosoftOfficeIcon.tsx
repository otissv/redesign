import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const MicrosoftOfficeIcon: FC<IconInterface> = function MicrosoftOfficeIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `MicrosoftOfficeIcon ${className}`;
      return (
        <Icon alt="MicrosoftOffice" className={classNames} {...propsRest}>
          <path d="M19.94 5.59V18.39Q19.94 19.06 19.55 19.59 19.16 20.11 18.5 20.29L12.77 21.94Q12.65 21.97 12.5 22H12.28Q11.95 22 11.68 21.91 11.41 21.82 11.13 21.67L7.38 19.55Q7.17 19.43 7.05 19.24 6.93 19.05 6.93 18.81 6.93 18.45 7.19 18.2 7.44 17.95 7.8 17.95H12.66V6.14L9 7.44Q8.57 7.6 8.3 8 8.03 8.38 8.03 8.85V15.58Q8.03 16 7.82 16.34 7.62 16.68 7.25 16.88L5.53 17.82Q5.29 17.95 5.05 17.95 4.64 17.95 4.35 17.66 4.06 17.37 4.06 16.95V7.47Q4.06 6.95 4.33 6.5 4.61 6 5.06 5.74L11.22 2.24Q11.43 2.12 11.67 2.06 11.91 2 12.15 2 12.32 2 12.46 2.03 12.6 2.05 12.77 2.1L18.5 3.69Q18.83 3.78 19.09 3.96 19.35 4.14 19.54 4.39 19.74 4.65 19.84 4.95 19.94 5.26 19.94 5.59M18.62 18.39V5.59Q18.62 5.36 18.5 5.19 18.35 5 18.13 4.96L15.31 4.18Q15 4.09 14.65 4 14.32 3.89 14 3.81V20.21L18.13 19Q18.35 18.96 18.5 18.79 18.62 18.62 18.62 18.39Z" />

        </Icon>
      );
    };
    MicrosoftOfficeIcon.displayName = 'MicrosoftOfficeIcon';
      