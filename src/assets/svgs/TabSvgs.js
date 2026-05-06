import React from 'react';
import Svg, {
  G,
  Path,
  Line,
  Defs,
  Stop,
  Circle,
  LinearGradient,
  Rect,
  ClipPath,
  Ellipse,
  RadialGradient,
  Image,
  Use,
} from 'react-native-svg';
import {COLORS} from '../../constants';

export function HomeSvg() {
  return (
    <Svg
      width="27.5"
      height="27.5"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.8751 19V14H14.8751V19C14.8751 19.55 15.3251 20 15.8751 20H18.8751C19.4251 20 19.8751 19.55 19.8751 19V12H21.5751C22.0351 12 22.2551 11.43 21.9051 11.13L13.5451 3.59997C13.1651 3.25997 12.5851 3.25997 12.2051 3.59997L3.8451 11.13C3.5051 11.43 3.7151 12 4.1751 12H5.8751V19C5.8751 19.55 6.3251 20 6.8751 20H9.8751C10.4251 20 10.8751 19.55 10.8751 19Z"
        fill="#8E9191"
      />
    </Svg>
  );
}
export function HomeSvgActive() {
  return (
    <Svg
      width="30"
      height="30"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.8751 19V14H14.8751V19C14.8751 19.55 15.3251 20 15.8751 20H18.8751C19.4251 20 19.8751 19.55 19.8751 19V12H21.5751C22.0351 12 22.2551 11.43 21.9051 11.13L13.5451 3.59997C13.1651 3.25997 12.5851 3.25997 12.2051 3.59997L3.8451 11.13C3.5051 11.43 3.7151 12 4.1751 12H5.8751V19C5.8751 19.55 6.3251 20 6.8751 20H9.8751C10.4251 20 10.8751 19.55 10.8751 19Z"
        fill={COLORS.primary}
      />
    </Svg>
  );
}

export function StatsSvg() {
  return (
    <Svg
      width="27.5"
      height="27.5"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.875 3H5.875C4.775 3 3.875 3.9 3.875 5V19C3.875 20.1 4.775 21 5.875 21H19.875C20.975 21 21.875 20.1 21.875 19V5C21.875 3.9 20.975 3 19.875 3ZM9.875 17H7.875V10H9.875V17ZM13.875 17H11.875V7H13.875V17ZM17.875 17H15.875V13H17.875V17Z"
        fill="#8E9191"
      />
    </Svg>
  );
}
export function StatsSvgActive() {
  return (
    <Svg
      width="30"
      height="30"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.875 3H5.875C4.775 3 3.875 3.9 3.875 5V19C3.875 20.1 4.775 21 5.875 21H19.875C20.975 21 21.875 20.1 21.875 19V5C21.875 3.9 20.975 3 19.875 3ZM9.875 17H7.875V10H9.875V17ZM13.875 17H11.875V7H13.875V17ZM17.875 17H15.875V13H17.875V17Z"
        fill={COLORS.primary}
      />
    </Svg>
  );
}
export function BlogsSvg() {
  return (
    <Svg
      width="22.5"
      height="22.5"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M9.0249 1L18.8249 6.312L11.2249 10.678V18.633C14.3489 18.809 16.7249 19.711 16.7249 20.8C16.7249 22.01 13.7659 23 10.1249 23C6.4839 23 3.5249 22.01 3.5249 20.8C3.5249 19.986 4.8559 19.282 6.8249 18.897V20.8H9.0249V1Z"
        fill="#8E9191"
      />
      <Path
        d="M20.5749 21.9C21.4862 21.9 22.2249 21.1613 22.2249 20.25C22.2249 19.3387 21.4862 18.6 20.5749 18.6C19.6636 18.6 18.9249 19.3387 18.9249 20.25C18.9249 21.1613 19.6636 21.9 20.5749 21.9Z"
        fill="#8E9191"
      />
    </Svg>
  );
}
export function BlogsSvgActive() {
  return (
    <Svg
      width="25"
      height="25"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M9.0249 1L18.8249 6.312L11.2249 10.678V18.633C14.3489 18.809 16.7249 19.711 16.7249 20.8C16.7249 22.01 13.7659 23 10.1249 23C6.4839 23 3.5249 22.01 3.5249 20.8C3.5249 19.986 4.8559 19.282 6.8249 18.897V20.8H9.0249V1Z"
        fill={COLORS.primary}
      />
      <Path
        d="M20.5749 21.9C21.4862 21.9 22.2249 21.1613 22.2249 20.25C22.2249 19.3387 21.4862 18.6 20.5749 18.6C19.6636 18.6 18.9249 19.3387 18.9249 20.25C18.9249 21.1613 19.6636 21.9 20.5749 21.9Z"
        fill={COLORS.primary}
      />
    </Svg>
  );
}

export function ProfileSvg() {
  return (
    <Svg
      width="20"
      height="20"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M20 22.25C25.5898 22.25 30.125 17.7148 30.125 12.125C30.125 6.53516 25.5898 2 20 2C14.4102 2 9.875 6.53516 9.875 12.125C9.875 17.7148 14.4102 22.25 20 22.25ZM29 24.5H25.1258C23.5648 25.2172 21.8281 25.625 20 25.625C18.1719 25.625 16.4422 25.2172 14.8742 24.5H11C6.02891 24.5 2 28.5289 2 33.5V34.625C2 36.4883 3.51172 38 5.375 38H34.625C36.4883 38 38 36.4883 38 34.625V33.5C38 28.5289 33.9711 24.5 29 24.5Z"
        fill="#8E9191"
      />
    </Svg>
  );
}
export function ProfileSvgActive() {
  return (
    <Svg
      width="22.5"
      height="22.5"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M20 22.25C25.5898 22.25 30.125 17.7148 30.125 12.125C30.125 6.53516 25.5898 2 20 2C14.4102 2 9.875 6.53516 9.875 12.125C9.875 17.7148 14.4102 22.25 20 22.25ZM29 24.5H25.1258C23.5648 25.2172 21.8281 25.625 20 25.625C18.1719 25.625 16.4422 25.2172 14.8742 24.5H11C6.02891 24.5 2 28.5289 2 33.5V34.625C2 36.4883 3.51172 38 5.375 38H34.625C36.4883 38 38 36.4883 38 34.625V33.5C38 28.5289 33.9711 24.5 29 24.5Z"
        fill={COLORS.primary}
      />
    </Svg>
  );
}
