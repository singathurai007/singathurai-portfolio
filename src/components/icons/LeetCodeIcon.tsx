import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export const LeetCodeIcon: React.FC<IconProps> = ({ className = 'w-4 h-4', size = 16 }) => {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>LeetCode</title>
      <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.762-1.823.762s-1.357-.295-1.824-.762L4.043 14.82a2.58 2.58 0 0 1 0-3.647L9.758 5.46c.467-.467 1.112-.762 1.824-.762.712 0 1.357.295 1.823.762l2.697 2.607a.86.86 0 0 0 1.218 0l1.016-1.016a.86.86 0 0 0 0-1.218L15.64 3.226C14.618 2.204 13.227 1.57 11.69 1.57c-1.536 0-2.927.634-3.95 1.656L1.93 9.036c-1.022 1.023-1.656 2.414-1.656 3.95 0 1.536.634 2.927 1.656 3.95l5.81 5.81c1.023 1.022 2.414 1.656 3.95 1.656 1.537 0 2.928-.634 3.95-1.656l2.697-2.607a.86.86 0 0 0 0-1.218l-1.016-1.016a.86.86 0 0 0-1.219 0zm2.593-4.223H10.15a.86.86 0 0 0-.86.86v1.438c0 .475.385.86.86.86h8.545a.86.86 0 0 0 .86-.86v-1.438a.86.86 0 0 0-.86-.86z" />
    </svg>
  );
};

export default LeetCodeIcon;

